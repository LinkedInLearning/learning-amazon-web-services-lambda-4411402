# Serverless Computing with AWS Lambda

This is the repository for the LinkedIn Learning course `Serverless Computing with AWS Lambda`. The full course is available from [LinkedIn Learning][lil-course-url].

![course-name-alt-text][lil-thumbnail-url]

Learn the essentials of working with AWS Lambda, a compute service that handles administration for you, so you're only responsible for your code. In this course, Marcia Villalba helps beginners get up and running with Lambda. To begin, she explains the basics of securing an AWS account and creating IAM users. From there, she moves on to the main concepts of the Lambda programming model and shows how to create Lambda functions and add API Gateway as a trigger. She steps through how to do everything from the AWS console to solidify your baseline knowledge before showing how to create lambda functions with the AWS Serverless Application Framework (SAM), which uses the paradigm of infrastructure as code—the recommended way to develop serverless applications.


_See the readme file in the main branch for updated instructions and information._

## Instructions

This repository has branches for each of the videos in the course. You can use the branch pop up menu in github to switch to a specific branch and take a look at the course at that stage, or you can add `/tree/BRANCH_NAME` to the URL to go to the branch you want to access.

## Branches

The branches are structured to correspond to the videos in the course.

The naming convention is `CHAPTER#_MOVIE#`. As an example, the branch named `02_03` corresponds to the second chapter and the third video in that chapter.

Some branches will have a beginning and an end state. These are marked with the letters `b` for "beginning" and `e` for "end". The `b` branch contains the code as it is at the beginning of the movie. The `e` branch contains the code as it is at the end of the movie. The `main` branch holds the final state of the code when in the course.

When switching from one exercise files branch to the next after making changes to the files, you may get a message like this:

    error: Your local changes to the following files would be overwritten by checkout:[files]
    Please commit your changes or stash them before you switch branches.
    Aborting

To resolve this issue:
Add changes to git using this command: git add .
Commit changes using this command: git commit -m "some message"

## Instructor

Marcia Villalba

_Principal Developer Advocate, Amazon Web Services_

[Other courses by the instructor](https://www.linkedin.com/learning/instructors/marcia-villalba)

[0]: # 'Replace these placeholder URLs with actual course URLs'
[lil-course-url]: https://www.linkedin.com/learning/learning-amazon-web-services-lambda-22774748
[lil-thumbnail-url]: https://media.licdn.com/dms/image/D4E0DAQHyJh-aVJ7oSA/learning-public-crop_675_1200/0/1698099539970?e=2147483647&v=beta&t=QhH16TaC8NFVW2rHPRNWnlddpdwvkcHaSAHfkRm94TY
