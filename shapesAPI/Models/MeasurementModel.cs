using System;
using Newtonsoft.Json;

namespace shapesAPI.Models
{
	public class MeasurementModel
	{
		public string MeasurementType;
		public string MeasurementAmount;
		public MeasurementModel(string measurementType, string measurementAmount)
		{
			MeasurementType = measurementType;
            MeasurementAmount = measurementAmount;
        }
	}
}

