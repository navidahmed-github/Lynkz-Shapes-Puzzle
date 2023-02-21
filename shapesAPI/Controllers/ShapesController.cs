using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using shapesAPI.Models;
using Newtonsoft.Json;
using System.Text.RegularExpressions;
using System.Text;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace shapesAPI.Controllers
{
    [Route("api/[controller]")]
    public class ShapesController : Controller
    {
        [HttpGet("{sentenceInput}")]
        public ActionResult GetTest(string sentenceInput)
        {
            try
            {
                return Json(new {statusCode = "200",  status = "success", data = new ShapeModel(sentenceInput) });
            }
            catch (Exception ex)
            {
               return Json(new { StatusCode = "500", status = "error", data = new { message = ex.Message } });
            }
        }
    }
}

