# The Scoop
![the-scoop-logo2](https://user-images.githubusercontent.com/100492419/199126032-e4995942-b266-4b2c-bb9f-d8a19aaf5be4.png)

## Table of Contents
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Illustrations](#illustrations)
  - [Deployed Page](#deployed-page)
  - [Possible Future Extensions](#possible-future-extensions)
  - [Set Up](#set-up)
  - [Organizational Resources](#organizational-resources)
  - [Contributors](#contributors)
  - [Project Specs](#project-specs)

## Introduction
   Visit The Scoop to get the latest news going on right now!

## Technologies
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)

## Features
   - Users are able to see a list view of the top news stories
   - Users are able to search for top news stories for a certain topic using the search bar
   - Users can view an article in more detail by clicking on the "get the scoop button"
   - Users can be taken to the original article on ney york times by clicking on the provided link in the article details section

## Illustrations
![Screen Shot 2022-10-31 at 5 00 24 PM](https://user-images.githubusercontent.com/100492419/199125747-68b653b3-78af-4bc3-8ff4-2ff2f614a42d.png)
  - The Scoop home page
 
![Screen Shot 2022-10-31 at 5 01 37 PM](https://user-images.githubusercontent.com/100492419/199125844-55c13c3a-0f36-4aca-a886-781c3504fb71.png)
  - The Scoop's article detail page

## Challenges
  - Used the article's uri instead of title when it came to routing to the detailed article page because if a article title had a special character, such as, a question mark. There would be an error becaus the application wouldn't be able to find the article. Using the uri guaranteed that no special characters would be present.
  - When a user filtered for magazines, an error would occur where some data returned from the api returned a empty string/multimedia property. Therefore, the application could not render the different magazines properly. I added a condition to my application to only redner articles/magazines/other media to only render media that had both properties defined. 

## Possible Future Extensions
  - Be able to favorite certain news stories
  - Add videos to the article details page

## Set Up
  - In your terminal, $ git clone https://github.com/INguyen22/NY-Times
  - Make a new directory and $ cd into it
  - Install NPM packages with $ npm install, Do NOT run npm audit fix --force
  - Type $ npm start, This runs the app in the development mode
  - Open http://localhost:3000 in your browser to view the application
  - Once you are done using the application , make sure to type Control + C in your terminal stop the server

## Organizational Resources
- [Wireframe](https://www.figma.com/file/VSurQYfsQItnMh8GNXilXq/The-Scoop?node-id=0%3A1)

## Contributors
  - [Ivy Nguyen](https://github.com/INguyen22) - [LinkedIn](https://www.linkedin.com/in/ivy-nguyen-051b27212/)

## Project Specs
  - The project spec & rubric can be found [here](https://mod4.turing.edu/projects/take_home/take_home_fe)
