import os
import json
import google.generativeai as genai
from dotenv import load_dotenv

# 1. Load environment variables
load_dotenv()

# 2. Configure the Gemini API client
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# 3. Initialize the model (Using the updated 2.5-flash model)
model = genai.GenerativeModel("gemini-2.5-flash")

def generate_structured_problem(topic, difficulty, language, custom_question=None):
    
    # Consolidating the JSON structure so we don't repeat it
    json_structure = """
    {
      "question": "",
      "hint_1": "",
      "hint_2": "",
      "hint_3": "",
      "solution": "",
      "concept": "",
      "common_mistakes": ""
    }
    """

    # Build the prompt based on whether a custom question was provided
    if custom_question:
        prompt = f"""
        Student question:
        {custom_question}

        Explain in {language}.
        Return strictly in the following JSON format:
        {json_structure}
        """
    else:
        prompt = f"""
        Generate a {difficulty} problem on topic: {topic}.

        Explain in {language}.
        Return strictly in the following JSON format:
        {json_structure}
        """

    try:
        # 4. Generate content using Gemini's SDK
        response = model.generate_content(
            prompt,
            generation_config={
                "temperature": 0.7,
                # 5. Native JSON mode - forces the model to output valid JSON
                "response_mime_type": "application/json" 
            }
        )

        # 6. Parse the text attribute of the Gemini response
        return json.loads(response.text)

    except Exception as e:
        print(f"API or Parsing Error: {e}") # Prints to your terminal for debugging
        return {
            "question": "Error generating structured response.",
            "hint_1": "",
            "hint_2": "",
            "hint_3": "",
            "solution": "",
            "concept": "",
            "common_mistakes": ""
        }