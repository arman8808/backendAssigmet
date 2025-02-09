const cache = {};
const MAX_SIZE = 10;

const getCacheSize = () => Object.keys(cache).length;

const addToCache = (req, res) => {
  const { key, value } = req.body;

  if (!key || !value) {
    return res.status(400).json({ error: "Key and value are required." });
  }

  if (cache[key]) {
    cache[key] = value;
    return res
      .status(200)
      .json({ message: "Key already exists. Value updated.", key, value });
  }

  if (getCacheSize() >= MAX_SIZE) {
    return res
      .status(400)
      .json({ error: "Cache size limit reached. Cannot add more items." });
  }

  cache[key] = value;
  return res
    .status(201)
    .json({ message: "Key-value pair added to cache.", key, value });
};

const getFromCache = (req, res) => {
  const { key } = req.params;

  if (!cache[key]) {
    return res.status(404).json({ error: "Key not found in cache." });
  }

  return res.status(200).json({ key, value: cache[key] });
};
const removeFromCache = (req, res) => {
  const { key } = req.params;

  if (!cache[key]) {
    return res.status(404).json({ error: "Key not found in cache." });
  }

  delete cache[key];
  return res
    .status(200)
    .json({ message: "Key-value pair removed from cache.", key });
};
export { getFromCache, addToCache, removeFromCache };
