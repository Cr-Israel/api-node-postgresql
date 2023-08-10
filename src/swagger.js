import swaggerAutogen from 'swagger-autogen'

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/productRoute.js']

swaggerAutogen(outputFile, endpointsFiles)
