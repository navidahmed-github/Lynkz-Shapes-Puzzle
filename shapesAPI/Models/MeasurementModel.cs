using System;
using Microsoft.OpenApi.Writers;
using Newtonsoft.Json;

namespace shapesAPI.Models
{
	public class MeasurementModel
	{
        public enum MeasurementType
        {
            RADIUS,
            SIDE_LENGTH,
            WIDTH,
            HEIGHT,
            LENGTH,
        }

        public string MeasurementName;
		public string MeasurementAmount;
        private  MeasurementType Measurement;
		public MeasurementModel(string measurementType, string measurementAmount)
		{
            MeasurementName = MeasurementTypeValidation(measurementType);
            MeasurementAmount = MeasurementAmountValidation(measurementAmount);
        }

        private string MeasurementTypeValidation(string measurementType)
        {
            string measurement = "";
            bool validMeasurementType = false;
            foreach (string measurementName in MeasurementType.GetNames<MeasurementType>())
            {
                if (measurementType == measurementName)
                {
                    validMeasurementType = true;
                    Measurement = (MeasurementType)Enum.Parse(typeof(MeasurementType), measurementName);
                    measurement = measurementName;
                    break;
                }
            }

            if (!validMeasurementType)
                throw new Exception("Measurement Type not supported");

            return measurement;
        }

        private string MeasurementAmountValidation(string measurementAmount)
        {
            int measurementValue;
            if (!int.TryParse(measurementAmount, out measurementValue))
                throw new Exception("Please check the measurement values are numerical values");

            if (measurementValue <= 0)
                throw new Exception("Please check the measurement values are postive numerical value");

            return measurementValue.ToString();
        }
    }
}

