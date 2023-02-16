using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using shapesAPI.Models;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace shapesAPI.Controllers
{
    [Route("api/[controller]")]
    public class shapesApiController : Controller
    {
        public static readonly List<string> Shapes = new List<string>()
        {
            "ISOSCELES TRIANGLE",
            "SQUARE",
            "SCALENE TRIANGLE",
            "PARALLELOGRAM",
            "EQUILATERAL TRIANGLE",
            "PENTAGON",
            "RECTANGLE",
            "HEXAGON",
            "HEPTAGON",
            "OCTAGON",
            "CIRCLE",
            "OVAL"
        };

        // GET api/{sentenceInput}
        [HttpGet("{sentenceInput}")]
        public string GetShape(string sentenceInput)
        {


            string[] input = sentenceInput.Split(' ');
            string shape;
            string measurement;
            string amount;
            string result = "";

            List<string> chunk1 = new List<string>();
            List<string> chunk2 = new List<string>();

            if (input[3] != "with")
            {
                shape = input[2] + ' ' + input[3];
                for (int i = 4; i < input.Length; i++)
                {
                    chunk1.Add(input[i]);
                }
            } else
            {
                shape = input[2];
                for (int i = 3; i < input.Length; i++)
                {
                    chunk1.Add(input[i]);
                }
            }

            if (chunk1[3] != "of")
            {
                measurement = chunk1[2] + ' ' + chunk1[3];
                for (int i = 4; i < input.Length; i++)
                {
                    chunk2.Add(input[i]);
                }
            } else
            {
                measurement = chunk1[2];
                for (int i = 3; i < input.Length; i++)
                {
                    chunk2.Add(input[i]);
                }
            }


            switch (shape)
            {
                case "circle":
                    circleModel circle = new circleModel(measurement, chunk2[4]);
                    result = JsonConvert.SerializeObject(circle);
                    break;
                case "isosceles triangle":

                default:
                    break;
            }
            //chunk1.ForEach(i => Console.WriteLine("{0}\t", i));

            Console.WriteLine(shape);
            Console.WriteLine(measurement);

            return result;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

