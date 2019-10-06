## Endpoits
### /image
Ao usar o metodo post a request será enviada na forma de formData  
**data('image_name', 'image');**

### /image
Ao usar o metodo get será retornada todas as imagens do servidor
```json
    [
  {
    "_id": "5d9a2007d5f62b274064d739",
    "image_name": "google-1570381831212.jpg",
    "__v": 0,
    "image_url": "http://localhost:5000/files/google-1570381831212.jpg",
    "id": "5d9a2007d5f62b274064d739"
  },
  {
    "_id": "5d9a204a901200281d026d9c",
    "image_name": "office-1570381898314.jpeg",
    "__v": 0,
    "image_url": "http://localhost:5000/files/office-1570381898314.jpeg",
    "id": "5d9a204a901200281d026d9c"
  },
  {
    "_id": "5d9a208f901200281d026d9d",
    "image_name": "khan-1570381967275.jpg",
    "__v": 0,
    "image_url": "http://localhost:5000/files/khan-1570381967275.jpg",
    "id": "5d9a208f901200281d026d9d"
  }
]
```
