import { NextResponse } from 'next/server';

export async function GET() {
  const sensorData = {
    temperature: {
      value: (Math.random() * (35 - 20) + 20).toFixed(2),
      unit: "°C",
    },
    humidity: {
      value: (Math.random() * (90 - 40) + 40).toFixed(2),
      unit: "%",
    },
    soilMoisture: {
      value: (Math.random() * (80 - 20) + 20).toFixed(2),
      unit: "%",
    },
    ph: {
      value: (Math.random() * (8.5 - 5.5) + 5.5).toFixed(1),
      unit: "",
    },
  };

  return NextResponse.json(sensorData);
}