# FlashCards API

[![GitHub Release][github_release_badge]][github_release_link]
[![License][license-image]][license-url]

API for the [Flashcard][github-flashcards] Frontend. Allows for Simple CRUD operations of cardpacks.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To install the required dependencies:

```sh
npm install
```

duplicate the ``.env.example`` file and rename to ``.env`` and fill in the required fields

| Field Name | Required Value                |
| ---------- | ----------------------------- -|
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

Add additional notes about how to deploy this on a live system

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

[github_release_badge]: https://img.shields.io/github/v/release/TheDigitalPhoenixX/Flashcards.svg?style=flat&include_prereleases
[github_release_link]: https://github.com/TheDigitalPhoenixX/Flashcards/releases

[github-contributors]: https://github.com/TheDigitalPhoenixX/Flashcards/contributors
[github-tags]: https://github.com/TheDigitalPhoenixX/Flashcards/tags

[github-flashcards]: https://github.com/TheDigitalPhoenixX/Flashcards
