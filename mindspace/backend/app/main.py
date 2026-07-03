from fastapi import FastAPI

app = FastAPI(title="MindSpace API")


@app.get("/")
def home():
    return {"message": "Welcome to MindSpace API"}