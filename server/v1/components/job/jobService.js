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

  result.meta.filtered = await jobRepo.count({
    descriptionKeyword,
    locationKeyword,
    isFulltimeOnly,
  })

  result.meta.total = await jobRepo.countAll()
  result.meta.currentPage = currentPage
  result.meta.totalPage = Math.ceil(result.meta.total / currentLimit)

  return result
}

module.exports = {
  getJobs,
}
