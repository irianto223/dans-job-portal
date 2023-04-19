const jobRepo = require('./jobRepository')

const getJobs = async () => {

  const result = {
    data: [],
    meta: {},
  }

  result.data = await jobRepo.find()
  result.meta.count = await jobRepo.count()
  result.meta.totalCount = await jobRepo.countAll()

  return result
}

module.exports = {
  getJobs,
}
