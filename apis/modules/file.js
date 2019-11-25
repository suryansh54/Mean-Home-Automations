const express = require('express')
const router = express.Router()
const fs = require('fs');

const testFolder = './';

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });