[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Mathmagicians_sonarqube&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=Mathmagicians_sonarqube)

# How to Execute a GitHub Action with Sonarcloud Scanning
This guide will walk you through the steps to execute a GitHub Action that uses Sonarcloud for scanning your code.

This example utilize the free [Sonarcloud.io](https://sonarcloud.io/) service but the concept is identical for the payed version.

## Prerequisites

- An account on [SonarSource](https://www.sonarsource.com/products/sonarcloud/) which will provike you with a `SONAR_TOKEN`. 
- In your GitHub repository, go to Settings > Secrets > Actions and create a new secret with the following details:
  - Name: `SONAR_TOKEN`
  - Value: `{{TOKEN}}`
- Update `sonar-project.properties` with any configuration option relevant for your project. The only required ones are `sonar.projectKey` and `sonar.organization`.

You can find a list of available properties at [docs.sonarqube.org](https://docs.sonarqube.org/latest/analyzing-source-code/analysis-parameters/)

## Steps

1. Commit and push the changes to your repository.
2. Navigate to the "Actions" tab in your repository and wait for the SonarQube Scan workflow to complete.

You can view the results of the scan in your SonarQube server instance.

## Recommendation

Choosing between Codacy and SonarCloud depends on your specific requirements and preferences. 

If you need a comprehensive code analysis tool with a focus on security vulnerabilities and code smells, SonarCloud is an excellent choice. It provides robust analysis capabilities and integrates well with popular development tools.

It has by far the wides [language support](https://docs.sonarqube.org/9.7/analyzing-source-code/languages/overview/)

If you're looking for a code quality tool that emphasizes code style, formatting, and test coverage, Codacy may be a better fit. It offers a broad range of analysis features and supports multiple programming languages.

### TLDR;

If the focus is on security vulnerabilities and code smells I recommend Sonarqube. Coding style and formatting can to a large degree for many languages be checked and auto fixed during the build process or in the IDE.
