import React, { useState, useEffect } from 'react';
import Deposit from './Deposit'; // Make sure the path is correct
import Footer from './Footer';
import EuroIcon from '@mui/icons-material/Euro';
import { useNavigate } from 'react-router-dom';

const GRID_SIZE = 5;
const MINES = 1;

const StakePanel = () => {
    const [balance, setBalance] = useState(20000);
    const [betAmount, setBetAmount] = useState("");
    const [cashOutAmount, setCashOutAmount] = useState(0);
    const [successfulOpens, setSuccessfulOpens] = useState(0);
    const [mines, setMines] = useState([]);
    const [betLocked, setBetLocked] = useState(false);
    const [betPlaced, setBetPlaced] = useState(false);
    const navigate = useNavigate();
    const [buttons, setButtons] = useState(
        Array(GRID_SIZE)
            .fill(null)
            .map(() => Array(GRID_SIZE).fill('-'))
    );

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        setSuccessfulOpens(0);
        setCashOutAmount(0);
        setBetLocked(false);
        setBetPlaced(false);
        setButtons(
            Array(GRID_SIZE)
                .fill(null)
                .map(() => Array(GRID_SIZE).fill('-'))
        );
        const newMines = Array(GRID_SIZE)
            .fill(null)
            .map(() => Array(GRID_SIZE).fill(false));
        placeMines(newMines);
        setMines(newMines);
    };

    const placeMines = (newMines) => {
        let count = 0;
        while (count < MINES) {
            const x = Math.floor(Math.random() * GRID_SIZE);
            const y = Math.floor(Math.random() * GRID_SIZE);
            if (!newMines[x][y]) {
                newMines[x][y] = true;
                count++;
            }
        }
    };

    const endGame = (won) => {
        setBetLocked(false);
        setBetPlaced(false);
        if (won) {
            alert(`You won! Your new balance is: ₹${balance}`);
        } else {
            revealMines();
        }
        setTimeout(initializeGame, 2000);
    };

    const handleBet = () => {
        const betAmountNum = parseFloat(betAmount);
        if (betAmountNum > balance) {
            alert('Insufficient funds! Please deposit money to play.');
            return;
        }
        setBalance(balance - betAmountNum);
        setBetPlaced(true);
        setBetLocked(true);
        setCashOutAmount(0);
    };

    const handleCashout = () => {
        const betAmountNum = parseFloat(betAmount);
        if (betPlaced) {
            setBalance(balance + betAmountNum + cashOutAmount);
            setBetLocked(false);
            setBetPlaced(false);
            initializeGame();
        }
    };

    const handleButtonClick = (row, col) => {
        if (!betPlaced) {
            return;
        }
        const newButtons = buttons.slice();

        // If the bet amount is greater than or equal to 250
        if (parseFloat(betAmount) >= 10) {
            // If 4 successful opens, clicking the 5th mine will hit it
            let mineshit = Math.floor(Math.random() * 10);
            if (successfulOpens < mineshit) {
                // Open the mine
                newButtons[row][col] = '0'; // Mark as opened
                setButtons(newButtons);
                setSuccessfulOpens(successfulOpens + 1);
                updateCashOutAmount(parseFloat(betAmount));
            } else {
                // Automatically hit the 5th mine
                newButtons[row][col] = 'M'; // Mark the clicked mine
                setButtons(newButtons);
                endGame(false);
            }
        } else {
            // If bet amount is less than 250, hit a random mine
            initializeGame(newButtons);
        }
        if(betAmount<10){
            alert("Enter Amount Greater than 10")
            return;
        }
    };

    const hitRandomMine = (newButtons) => {
        let randomRow = Math.floor(Math.random() * GRID_SIZE);
        let randomCol = Math.floor(Math.random() * GRID_SIZE);
        while (!mines[randomRow][randomCol]) {
            randomRow = Math.floor(Math.random() * GRID_SIZE);
            randomCol = Math.floor(Math.random() * GRID_SIZE);
        }
        newButtons[randomRow][randomCol] = 'M'; // Hit a random mine
        setButtons(newButtons);
        endGame(false);
    };

    const revealMines = () => {
        const newButtons = buttons.slice();
        let revealedCount = 0;

        // Reveal only 3 mines
        for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 0; j < GRID_SIZE; j++) {
                if (mines[i][j] && revealedCount < 3) {
                    newButtons[i][j] = 'M'; // Reveal the mine
                    revealedCount++;
                }
            }
        }

        // Reveal the 5th mine if applicable
        const fifthMinePosition = getFifthMinePosition(newButtons);
        newButtons[fifthMinePosition.row][fifthMinePosition.col] = 'M'; // Mark the 5th mine

        setButtons(newButtons);
    };

    const getFifthMinePosition = (buttons) => {
        for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 0; j < GRID_SIZE; j++) {
                if (buttons[i][j] === '-') {
                    return { row: i, col: j };
                }
            }
        }
        return { row: 0, col: 0 }; // Default position if no empty spots found
    };

    const updateCashOutAmount = (betAmountNum) => {
        setCashOutAmount((prevAmount) => prevAmount + betAmountNum * 0.09);
    };

    return (
        <div className="bg-gray-800 text-white w-full h-screen flex flex-col max-w-sm mx-auto">
            <div className="flex items-center justify-between bg-gray-900">
                <div className="text-xl">
                    <img className="w-16 bg-gray-800 h-12 rounded -2xl" src="img/logohunter.png" alt="Logo" />
                </div>
                <div className="flex items-center">
                    <span className="rounded-lg text-lg">{balance}</span>
                    <span className="text-yellow-400">
                        <EuroIcon />
                    </span>
                    <button className="bg-blue-500 p-2 mr-2 rounded ml-2" onClick={() => navigate('/account/deposit')}>
                        Deposit
                    </button>
                </div>
            </div>
            <>
                <div className="grid grid-cols-5 gap-2 p-3">
                    {buttons.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                            <button
                                key={`${rowIndex}-${colIndex}`}
                                className={`w-12 h-12 md:w-16 md:h-16 border-2 rounded-lg ${cell === 'M' ? 'bg-red-600' : cell === '0' ? 'bg-green-600' : 'bg-gray-600'}`}
                                onClick={() => handleButtonClick(rowIndex, colIndex)}
                            >
                                {cell === '-' ? '' : cell}
                            </button>
                        ))
                    )}
                </div>
                <div className="p-1 bg-gray-900">
                    <div className="text-gray-400">Bet Amount</div>
                    <div className="flex items-center mb-4 border-2 border-solid border-yellow-600 rounded-lg p-2">
                        <input
                            type="number"
                            value={betAmount}
                            onChange={(e) => setBetAmount(Number(e.target.value))}
                            className="bg-gray-700 text-white border border-gray-600 rounded-lg p-2 w-full"
                            placeholder="0.00000000"
                            disabled={betPlaced} // Disable input if bet is placed
                        />
                        <div className="flex items-center mx-2">
                            <span className="text-yellow-500 text-2xl">₿</span>
                        </div>
                        <div className="flex">
                            <button
                                className="bg-gray-700 border border-gray-600 rounded-lg p-2 mx-1"
                                onClick={() => setBetAmount((prevAmount) => (prevAmount / 2).toFixed(2))}
                                disabled={betPlaced}
                            >
                                1/2
                            </button>
                            <button
                                className="bg-gray-700 border border-gray-600 rounded-lg p-2 mx-1"
                                onClick={() => setBetAmount((prevAmount) => (prevAmount * 2).toFixed(2))}
                                disabled={betPlaced}
                            >
                                2x
                            </button>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="bg-green-600 w-2/3 rounded text-white" onClick={handleCashout}>
                            Cashout ₹{(parseFloat(betAmount) + cashOutAmount).toFixed(2)}
                        </button>
                        <button
                            className={`rounded mx-1 w-1/3 h-12 ${betPlaced ? 'bg-gray-400' : 'bg-green-600 text-white'}`}
                            onClick={handleBet}
                            disabled={betPlaced}
                        >
                            Bet
                        </button>
                    </div>
                </div>
            </>
            <div className="m-10">
                <Footer />
            </div>
        </div>
    );
};

export default StakePanel;