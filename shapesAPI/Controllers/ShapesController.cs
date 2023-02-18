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
            static string parseShape(String input)
            {
                string shapeName = "";
                string[] shapeFragment =
                    new Regex(@"draw\s+(.*?)\s+(with)", RegexOptions.IgnoreCase)
                    .Match(input).ToString().Split(' ');

                if (shapeFragment[3] != "with")
                {
                    shapeName = shapeFragment[2] + ' ' + shapeFragment[3];
                }
                else
                {
                    shapeName = shapeFragment[2];
                }

                return shapeName;
            }

            static Dictionary<int, MeasurementModel> parseMeasurements(String input)
            {
                Dictionary<int, MeasurementModel> measurements = new Dictionary<int, MeasurementModel>(); 
                string[] primaryMeasurement =
                    new Regex(@"with\s+(.*?)\s+([0-9]+)", RegexOptions.IgnoreCase)
                    .Match(input).ToString().Split(' ');

                if (primaryMeasurement[3] != "of")
                {
                    measurements.Add(0, new MeasurementModel(primaryMeasurement[2] + ' ' + primaryMeasurement[3], primaryMeasurement[5]));
                }
                else
                {
                    measurements.Add(0, new MeasurementModel(primaryMeasurement[2], primaryMeasurement[4]));
                }

                List<Match> additionalMeasurementFragments =
                    new Regex(@"and\s+(.*?)\s+([0-9]+)", RegexOptions.IgnoreCase)
                    .Matches(input).ToList();
                int key = 1;
                foreach (Match measurementFragment in additionalMeasurementFragments)
                {
                    string[] additionalMeasurement = measurementFragment.ToString().Split(' ');
                    if (additionalMeasurement[3] != "of")
                    {
                        measurements.Add(key, new MeasurementModel(additionalMeasurement[2] + ' ' + additionalMeasurement[3], additionalMeasurement[5]));
                        key++;
                    }
                    else
                    {
                        measurements.Add(key, new MeasurementModel(additionalMeasurement[2], additionalMeasurement[4]));
                        key++;
                    }
                }

                return measurements;
            }

            ShapeModel shape = new ShapeModel(parseShape(sentenceInput), parseMeasurements(sentenceInput));
            return JsonConvert.SerializeObject(shape);
        }
    }
}

