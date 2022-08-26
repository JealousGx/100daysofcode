import os
import re
from typing import List
import openai
import argparse

MAX_INPUT_LENGTH = 24



def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args = parser.parse_args()
    user_input = args.input

    print(f"User input: {user_input}")
    if not validate_length(user_input):
      raise ValueError(f"Input is too long! Must be less than {MAX_INPUT_LENGTH} characters.")
    else:
      text_result = generate_branding_snippet(user_input)
      print(f"Snippet: {text_result}")
      keywords_result = generate_keywords(user_input)
      print(f"Keywords: {keywords_result}")

def generate_branding_snippet(user_input: str) -> str:
    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")

    prompt = f"Generating a branding snippet for {user_input}"
    print(prompt)

    response = openai.Completion.create(
        model="davinci-instruct-beta-v3", prompt=prompt, temperature=0, max_tokens=32
    )

    # Get the text from the object and remove unnecessary whitespaces.
    brand_text: str = response["choices"][0]["text"].strip()
    last_char = brand_text[-1] # Get the last char
    # If the last char is not either of these included in the object, add three dots in the end.
    if last_char not in { ".", "!", "?"}:
      brand_text += "..."
    
    return brand_text
  
def generate_keywords(user_input: str) -> List[str]:
    # Load your API key from an environment variable or secret management service
    openai.api_key = os.getenv("OPENAI_API_KEY")

    prompt = f"Generating branding keywords for {user_input}"
    print(prompt)

    response = openai.Completion.create(
        model="davinci-instruct-beta-v3", prompt=prompt, temperature=0, max_tokens=32
    )

    # Get the text from the object and remove unnecessary whitespaces.
    keywords: str = response["choices"][0]["text"]
    keywords_array = keywords.strip()
    keywords_array = re.split(",|\n|;|-", keywords)
    keywords_array = [k.lower().strip() for k in keywords_array]
    keywords_array = [k for k in keywords_array if len(k) > 0]
    
    return keywords_array

def validate_length(user_input: str) -> bool:
    if len(user_input) > MAX_INPUT_LENGTH:
        return False
    return True

if __name__ == "__main__":
    main()

