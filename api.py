from fastapi import FastAPI, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import logging
from scan_hybrid import HybridBrain
from src.simulation_engine import SimulationEngine

# Configure Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("API")

app = FastAPI(title="Sniper Trading Agent API", version="1.0")

# Allow CORS for Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Brain & Sim Engine
brain = HybridBrain()
sim_engine = SimulationEngine()

@app.get("/")
def home():
    return {"status": "Online", "message": "Sniper Agent is Ready."}

@app.get("/api/scan")
def run_scan():
    """
    Triggers the Hybrid Brain to think.
    automatically processes a simulation tick based on findings.
    """
    logger.info("Received Scan Request from Dashboard...")
    try:
        decisions = brain.think()
        
        # RL Simulation Tick (Auto-Run)
        logs = sim_engine.process_tick(decisions)
        
        # Sort by Confidence for the UI
        decisions.sort(key=lambda x: x['Confidence'], reverse=True)
        
        return {
            "status": "success", 
            "data": decisions, 
            "simulation": sim_engine.get_portfolio(),
            "logs": logs
        }
    except Exception as e:
        logger.error(f"Scan failed: {e}")
        return {"status": "error", "message": str(e)}

@app.get("/api/simulation/state")
def get_sim_state():
    return sim_engine.get_portfolio()

@app.post("/api/simulation/reset")
def reset_sim():
    sim_engine.reset()
    return {"status": "reset", "state": sim_engine.get_portfolio()}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
