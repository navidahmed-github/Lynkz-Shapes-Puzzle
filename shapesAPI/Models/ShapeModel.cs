using System;
using System.Diagnostics.Metrics;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using AspNetCoreRateLimit;
using Microsoft.AspNetCore.Rewrite;
using Newtonsoft.Json;

namespace shapesAPI.Models
{

	public class ShapeModel
	{
        // Number corresponds to the number of measurements required
        private enum ShapeType
        {
            ISOSCELES_TRIANGLE = 2,
            SQUARE = 1,
            SCALENE_TRIANGLE = 3,
            PARALLELOGRAM = 2,
            EQUILATERAL_TRIANGLE = 1,
            PENTAGON = 1,
            RECTANGLE = 2,
            HEXAGON = 1,
            HEPTAGON = 1,
            OCTAGON = 1,
            CIRCLE = 1,
            OVAL = 2
        }

		public string ShapeName { get; }
        public List<MeasurementModel> Measurements { get; }
        private ShapeType Shape;
        public ShapeModel(string shapeName, List<MeasurementModel> measurements)
		{
			ShapeName = shapeName;
			Measurements = measurements;
        }

        public ShapeModel(string input)
        {
            ShapeName = ParseShape(input.ToUpper());
            Measurements = ParseMeasurements(input.ToUpper());
        }

        private string ParseShape(String input)
        {
            string[] shapeFragment =
                new Regex(@"draw\s+(.*?)\s+(with)", RegexOptions.IgnoreCase)
                .Match(input).ToString().Split(' ');

            if (shapeFragment[0] == "" || shapeFragment.Length <= 3)
                throw new Exception("Please make sure you enter the shape with the correct sentence structure");

            if (shapeFragment[3] != "WITH")
                return ShapeNameValidation($"{shapeFragment[2]}_{shapeFragment[3]}");
            else
                return ShapeNameValidation($"{shapeFragment[2]}");
        }

        private string ShapeNameValidation(string nameInput)
        {
            string shapeName = "";
            bool validShape = false;
            foreach (string name in ShapeType.GetNames<ShapeType>())
            {
                if (nameInput == name)
                {
                    validShape = true;
                    Shape = (ShapeType)Enum.Parse(typeof(ShapeType), name);
                    shapeName = nameInput;
                    break;
                }
            }

            if (!validShape || shapeName == "")
                throw new Exception("Shape is not supported");

            return shapeName;
        }

        private List<MeasurementModel> ParseMeasurements(String input)
        {
            List<MeasurementModel> measurements = new List<MeasurementModel>();
            string[] primaryMeasurement =
                new Regex(@"with\s+(.*?)\s+([0-9]+$)", RegexOptions.IgnoreCase)
                .Match(input).ToString().Split(' ');

            try
            {
                if (primaryMeasurement[3] != "OF")
                    measurements.Add(new MeasurementModel($"{primaryMeasurement[2]}_{primaryMeasurement[3]}", primaryMeasurement[5]));
                else
                    measurements.Add(new MeasurementModel(primaryMeasurement[2], primaryMeasurement[4]));

            List<Match> additionalMeasurementFragments =
                new Regex(@"and\s+(.*?)\s+([0-9]+)", RegexOptions.IgnoreCase)
                .Matches(input).ToList();

                foreach (Match measurementFragment in additionalMeasurementFragments)
                {
                    string[] additionalMeasurement = measurementFragment.ToString().Split(' ');
                    if (additionalMeasurement[3] != "OF")
                        measurements.Add(new MeasurementModel($"{primaryMeasurement[2]}_{primaryMeasurement[3]}", additionalMeasurement[5]));
                    else
                        measurements.Add(new MeasurementModel(additionalMeasurement[2], additionalMeasurement[4]));
                }
            }


            catch (Exception ex)
            {
                throw new Exception("Please make sure the measurements are valid and the sentence structure is correct");
            }

            return measurements;
        }
    }
}

