# HTTP Requests — you are (probably) doing it wrong
## Code Example
![Cover Photo](./cover.png)

## Prerequirements
To run the example you need node, yarn and docker installed.

## Installation
The following command will fetch all needed node modules.
```
./setup.sh
```

## Run
To run the project execute:
```
./run.sh
```

This will run docker-compose file and setup the API server on port 3000. The identity server is not
exposed but you can access restricted data by performing HTTP Parameter Polution.

More information about the method in the article:
[HTTP Requests — you are (probably) doing it
wrong](https://medium.com/swinginc/http-requests-you-are-probably-doing-it-wrong-32b46a1c40d7)
