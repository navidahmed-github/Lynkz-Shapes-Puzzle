using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using shapesAPI.Models;
using Newtonsoft.Json;
using System.Text.RegularExpressions;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace shapesAPI.Controllers
{
    [Route("api/[controller]")]
    public class ShapesController : Controller
    {
        [HttpGet("{sentenceInput}")]
        public IActionResult GetTest(string sentenceInput)
        {
            try
            {
                return Ok(JsonConvert.SerializeObject(new ShapeModel(sentenceInput), Formatting.Indented));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}

