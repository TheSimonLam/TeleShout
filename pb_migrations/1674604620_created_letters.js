migrate((db) => {
  const collection = new Collection({
    "id": "p9a0xwlbeyj5ra2",
    "created": "2023-01-24 23:57:00.953Z",
    "updated": "2023-01-24 23:57:00.953Z",
    "name": "letters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "niyeqhqn",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 125,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wthbtqri",
        "name": "message",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 1500,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "byvtucvy",
        "name": "from",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 100,
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("p9a0xwlbeyj5ra2");

  return dao.deleteCollection(collection);
})
