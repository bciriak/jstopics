import fs from 'fs'
import path from 'path'

type Quiz = {
  id: string
  questions: [
    id: string,
    question: string,
    answers: [
      key: string,
      value: string
    ]
  ]
}

// Function to merge all JSON files in a given folder into a single JSON object
async function mergeJsonFiles(folderPath: string): Promise<void> {
  try {
    // Read all file names in the folder
    const files = fs.readdirSync(folderPath)

    // Filter JSON files
    const jsonFiles = files.filter((file) => path.extname(file) === '.json')

    // Initialize an empty object to store merged data
    let mergedData: Quiz[] = []

    // Loop through each JSON file
    for (const file of jsonFiles) {
      if (file !== 'db.json') {
        // Read the file content
        const data = fs.readFileSync(path.join(folderPath, file), {
          encoding: 'utf-8',
        })
        const jsonData = JSON.parse(data) as Quiz
        jsonData.id = file
        mergedData.push(jsonData)
      }
    }
    // Optionally, save the merged data to a new JSON file
    fs.writeFileSync(
      path.join(folderPath, 'db.json'),
      JSON.stringify(mergedData, null, 2),
    )
    console.log('Merged JSON files successfully.')
  } catch (error) {
    console.error('Failed to merge JSON files:', error)
  }
}

mergeJsonFiles('./quizes')
