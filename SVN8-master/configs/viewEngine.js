import express from "express";
//var express = require('express');

let configViewEngine = (app) => {
  //app.use(express.static(".//public"));
  app.set("view engine", "ejs");
  app.set("views", "./SVN8-master/views");
};

export default configViewEngine;
