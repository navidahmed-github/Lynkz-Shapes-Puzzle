using System;
namespace shapesAPI.Models
{
	public class circleModel
	{
		public string shapeName;
		public string measurement;
		public string amount;
		public circleModel(string measurement, string amount)
		{
			shapeName = "Circle";
			this.measurement = measurement;
			this.amount = amount;
		}
	}
}

