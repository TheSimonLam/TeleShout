migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8wrf3681bdw46rn");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "8wrf3681bdw46rn",
    "created": "2023-01-24 21:43:48.003Z",
    "updated": "2023-01-24 21:43:48.003Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p513x8le",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fezx31zo",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
