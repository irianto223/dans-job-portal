const jobRepo = require('./jobRepository')

const getJobs = async ({
  descriptionKeyword,
  locationKeyword,
  isFulltimeOnly,
  page,
  limit,
}) => {

  const currentPage = page ? Number(page) : 1
  const currentLimit = limit ? Number(limit) : 30

  const result = {
    data: [],
    meta: {},
  }

  result.data = await jobRepo.find({
    descriptionKeyword,
    locationKeyword,
    isFulltimeOnly,
    page: currentPage,
    limit: currentLimit,
  })

  result.meta.filteredCount = await jobRepo.count({
    descriptionKeyword,
    locationKeyword,
    isFulltimeOnly,
  })

  result.meta.totalCount = await jobRepo.countAll()
  result.meta.currentPage = currentPage
  result.meta.totalPage = Math.ceil(result.meta.totalCount / currentLimit)

  return result
}

const getJobById = async (id) => {
  return jobRepo.findOneById(id)
}

module.exports = {
  getJobs,
  getJobById,
}
