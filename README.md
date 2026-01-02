# AI Trading Agent (Student MVP)

![Status](https://img.shields.io/badge/Status-Prototyping-orange)
![Tech](https://img.shields.io/badge/Stack-PyTorch%20|%20FastAPI%20|%20React-blue)

A **Directional Prediction LSTM Model** for S&P 500/AAPL stocks, featuring strict Time-Series validation and a web dashboard. Built as a portfolio project demonstration.

## 🎯 Key Features
*   **Neural Network**: 2-Layer LSTM trained to predict Up/Down/Neutral trends.
*   **Strict Splitting**:
    *   Train: 2019-2022
    *   Validation: 2023
    *   Test: 2024 (Unseen)
*   **Web Dashboard**: React frontend + FastAPI backend to visualize live forecasts.
*   **Backtesting Engine**: Simulates 2024 performance vs "Buy & Hold".

## 🛠️ Setup & Usage

### 1. Installation
```bash
# Clone
git clone https://github.com/Junni007/AI-Trading-Agent.git
cd AI-Trading-Agent

# Install Python requirements
pip install -r requirements.txt

# Install Frontend dependencies (Requires Node.js)
cd frontend
npm install
cd ..
```

### 2. Hyperparameter Tuning (Optional)
Find the best model configuration using Optuna.
```bash
python src/tune.py
```
*   **Resumable**: Saves progress to `optuna_study.db`. Safe to stop and restart.
*   **Output**: Saves optimized config to `best_hyperparameters.json`.

### 3. Training the Model
Trains the LSTM model using the best hyperparameters found (or defaults).
```bash
python train.py
```
*   **Smart Loading**: Automatically loads `best_hyperparameters.json`.
*   **Auto-Resume**: If interrupted, restarts from the last `checkpoints_mvp/last.ckpt`.
*   **Logging**: Detailed logs saved to `training.log`.
*   **Output**: `final_lstm_model.pth`.

### 4. Run the Web App
**Terminal 1 (Backend):**
```bash
uvicorn app.main:app --reload
```
**Terminal 2 (Frontend):**
```bash
cd frontend
npm start
```
Go to `http://localhost:3000` to see the dashboard.

## 📊 Results (2024 Test Set)
*To be populated after training.*
*   **Accuracy**: Target >52%
*   **Sharpe Ratio**: Target >1.0

## 📁 Repository Structure
*   `src/tune.py`: Optuna hyperparameter optimization.
*   `src/data_loader.py`: Strict time-split logic.
*   `src/lstm_model.py`: PyTorch Lightning LSTM.
*   `train.py`: Robust training loop with Auto-Resume.
*   `docs/`: Project Manual and Theory.
*   `app/`: FastAPI Backend.
*   `frontend/`: React Dashboard.
