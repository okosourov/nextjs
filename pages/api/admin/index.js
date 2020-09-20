export default (req, res) => {
  res.statusCode = 404

  res.end(JSON.stringify({ error: 'API router not found' }))
}