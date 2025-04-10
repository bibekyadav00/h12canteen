"use server"

import * as XLSX from "xlsx"
import fs from "fs/promises"
import path from "path"

interface FeedbackData {
  name: string
  email: string
  foodRating: number
  serviceRating: number
  cleanlinessRating: number
  valueRating: number
  visitFrequency: string
  mealType: string[]
  suggestions: string
}

export async function submitFeedback(data: FeedbackData) {
  try {
    // Create a timestamp for the feedback
    const timestamp = new Date().toISOString()

    // Prepare the data for Excel
    const feedbackRow = {
      Timestamp: timestamp,
      Name: data.name,
      Email: data.email,
      "Food Rating": data.foodRating,
      "Service Rating": data.serviceRating,
      "Cleanliness Rating": data.cleanlinessRating,
      "Value Rating": data.valueRating,
      "Visit Frequency": data.visitFrequency,
      "Meal Types": Array.isArray(data.mealType) ? data.mealType.join(", ") : data.mealType,
      Suggestions: data.suggestions,
    }

    // Define the file path
    const filePath = path.join(process.cwd(), "feedback_data.xlsx")

    // Check if the file exists
    let workbook
    try {
      const fileBuffer = await fs.readFile(filePath)
      workbook = XLSX.read(fileBuffer)
    } catch (error) {
      // File doesn't exist, create a new workbook
      workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet([]), "Feedback")
    }

    // Get the worksheet
    const worksheet = workbook.Sheets["Feedback"]

    // Convert worksheet to JSON to append data
    const jsonData = XLSX.utils.sheet_to_json(worksheet) || []
    jsonData.push(feedbackRow)

    // Convert back to worksheet
    const newWorksheet = XLSX.utils.json_to_sheet(jsonData)
    workbook.Sheets["Feedback"] = newWorksheet

    // Write to file
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" })
    await fs.writeFile(filePath, excelBuffer)

    return { success: true }
  } catch (error) {
    console.error("Error submitting feedback:", error)
    throw new Error("Failed to submit feedback")
  }
}
