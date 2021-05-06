# FlashCards API

[![GitHub Release][github_release_badge]][github_release_link]
[![License][license-image]][license-url]

API for the [Flashcard][github-flashcards] Frontend. Allows for Simple CRUD operations of cardpacks.

View [Endpoints Docs](./docs/endpoints.md).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To install the required dependencies:

```sh
npm install
```

duplicate the ``.env.example`` file and rename to ``.env`` and fill in the required fields

| Field Name | Required Value                |
| ---------- | ----------------------------- |
| DB_STRING  | MongoDB Connection String     |
| PORT       | Port Number to run the API on |

### Running

To Run the API you can either run:

```sh
nodemon src/app.js
```

Or use the script in the ``packages.json`` using:

```sh
npm run mon
```

## Deployment

To deploy the api to a live/production server. You can either use docker, docker-compose or K8s.

### Docker

Duplicate ``.env.example`` file and rename it to ``.env`` and fill in the required fields or pass it through command line arguemnts when running ``docker run``. Change the first part of the tag to your dockerhub id)

```sh
docker build -t digitalphoenixx/flashcards-api:latest .
docker run -p 8000:8000 digitalphoenixx/flashcards-api:latest
```

Replace build tag and port used with appropriate values.

### Docker-compose

Duplicate the ``.env`` file and fill in the data. Replace the port number in the ``docker-compose.yml`` file with preferred port. Then run

```sh
docker-compose up
```

### K8s

1) Build the image. (change the first part of the tag to your dockerhub id)

    ```sh
    docker build -t digitalphoenixx/flashcards-api:latest .
    ```

1) Change the image name in the ``.k8s/kustomization.yml`` to the tag used in the build step.

1) Change the hostname in the ``.k8s/ingress.yml`` to your domain.

1) Create deployment.

    ```sh
    kubectl apply -k .k8s/
    ```

1) Create the secret with the mongo connection string.

    ```sh
    kubectl create secret generic flashcards-api-secret --from-literal=DB_STRING="CONNECTION_STRING_HERE" -n flashcards
    ```

1) Check the everything is running, might take a second. Note: Ready is 1/1.

    ``` sh
    > kubectl get -n flashcards all

    NAME                                             READY   STATUS    RESTARTS   AGE
    pod/flashcards-api-deployment-79559684df-54d8c   1/1     Running   0          37s

    NAME                             TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
    service/flashcards-api-service   ClusterIP   10.100.135.137   <none>        8000/TCP   37s

    NAME                                        READY   UP-TO-DATE   AVAILABLE   AGE
    deployment.apps/flashcards-api-deployment   1/1     1            1           37s

    NAME                                                   DESIRED   CURRENT   READY   AGE
    replicaset.apps/flashcards-api-deployment-79559684df   1         1         1       37s

    ```

## Built With

* [VS Code](https://code.visualstudio.com/) - Code Editor

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository][github-tags].

## Authors

* **Mohamed Said Sallam** - Main Dev - [TheDigitalPhoenixX](https://github.com/TheDigitalPhoenixX)

See also the list of [contributors][github-contributors] who participated in this project and their work in [CONTRIBUTORS.md](CONTRIBUTORS.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* [README.md Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)

[license-image]: https://img.shields.io/badge/License-MIT-brightgreen.svg
[license-url]: https://opensource.org/licenses/MIT

[github_release_badge]: https://img.shields.io/github/v/release/TheDigitalPhoenixX/FlashCards-API.svg?style=flat&include_prereleases
[github_release_link]: https://github.com/TheDigitalPhoenixX/FlashCards-API/releases

[github-contributors]: https://github.com/TheDigitalPhoenixX/FlashCards-API/contributors
[github-tags]: https://github.com/TheDigitalPhoenixX/FlashCards-API/tags

[github-flashcards]: https://github.com/TheDigitalPhoenixX/FlashCards-API
