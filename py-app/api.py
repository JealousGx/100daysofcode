from fastapi import FastAPI, HTTPException
from assistant import generate_branding_snippet, generate_keywords
from mangum import Mangum

app = FastAPI()
handler = Mangum(app)
MAX_INPUT_LENGTH = 24

@app.get("/generate-keywords-snippets-api")
async def keywords_snippet_api(user_input: str):
    validate_input(user_input)
    snippet = generate_branding_snippet(user_input)
    keywords = generate_keywords(user_input)
    return [snippet, keywords]
  
def validate_input(user_input: str) -> bool:
    if len(user_input) > MAX_INPUT_LENGTH:
        raise HTTPException(status_code=400, detail=f"Input too long. Must be less than {MAX_INPUT_LENGTH} characters.")
    return True



#uvicorn api:app --reload
