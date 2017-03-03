# Youtube Binge - Proof of Concept app

This app was created to be a proof of concept to show off my javascript, react and CSS styling skills I've been working on developing! 

This is a webapp that allows a user to type and search for a youtube video. It will display 5 results and allow the user to choose a video to watch.

The App is fully responsive to different browsers and works on multiple devices

You can also see a running copy [here](https://youtube-binge.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
* Node JS - https://nodejs.org/en/

```

### Installing

Download the project to a directory of your choice:

```
git clone https://github.com/ZachAttack83/YoutubeBinge.git
```

Install node_module dependencies

```
npm install
```

To start up the dev server:
```
npm run watch
```

This should start up your browser to localhost:3000

## Deployment

```
npm run build
```

This will create a React build in ./build/ that you can use to deploy up to a web server.

Or, use Heroku:

```
Install [Heroku](https://devcenter.heroku.com/articles/heroku-cli)
```

Then, inside the project directory
```
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open
```

## Built With

* [ReactJS](https://facebook.github.io/react/) - The web framework used
* [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) - for responsive styling
* [Gulp.js](http://www.gulpjs.com) - Used to automate my buildstep for autoprefixing my css
* [Gulp autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) - Gulp autoprefixer was used to make the flexbox code I created cross-browser compatible
* [Heroku](https://www.heroku.com) - Free app serving

## Contributing

Feel free to submit pull requests to improve this app

## Authors

* **Zach Willard**

## License

Open source - I don't care if you take this app and make it your own!

## Acknowledgments

* [Codeschool.com](http://www.codeschool.com) For all of the Javascript basics I needed to get back up to speed
* [Wesbos](http://wesbos.com/) for his awesome courses on React, ES6 and Flexbox
* etc