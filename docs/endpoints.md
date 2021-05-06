# Endpoints

## /cardpacks

| Request Type | Params | Description                        |
| ------------ | ------ | ---------------------------------- |
| GET          | /      | Returns All Cards packs            |
| POST         | /      | Create cardpack                    |
| GET          | /:id   | Returns cardpack with specified id |
| PUT          | /:id   | Updates cardpack with specified id |
| DELETE       | /:id   | Deletes cardpack with specified id |

### [Schema](../src/models/cardpack.js)

#### Cardside

| Name  | Type   | Required |
| ----- | ------ | -------- |
| text  | String | false    |
| image | String | false    |

#### Card

| Name  | Type     | Required |
| ----- | -------- | -------- |
| front | Cardside | true     |
| back  | Cardside | true     |

#### Cardpack

| Name  | Type   | Required |
| ----- | ------ | -------- |
| id    | String | true     |
| title | string | true     |
| cards | card[] | true     |
