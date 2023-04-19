const filterJobs = ({
  data,
  descriptionKeyword,
  locationKeyword,
  isFulltimeOnly,
}) => {
  let filtered = [...data]
  filtered = filtered.filter(d => {
    return (
      new RegExp(`${descriptionKeyword}`, 'i').test(d.company)
      || new RegExp(`${descriptionKeyword}`, 'i').test(d.title)
      || new RegExp(`${descriptionKeyword}`, 'i').test(d.description)
    )
  })

  filtered = filtered.filter(d => {
    return (
      new RegExp(`${locationKeyword}`, 'i').test(d.location)
    )
  })

  if (isFulltimeOnly === true) {
    filtered = filtered.filter(d => d.type == 'Full Time')
  }

  return filtered
}

module.exports = {
  filterJobs,
}
