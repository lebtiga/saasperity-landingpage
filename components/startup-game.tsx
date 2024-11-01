"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Star,
  AlertCircle,
  Trophy,
  Sparkles
} from "lucide-react";

interface GameState {
  funds: number;
  users: number;
  growth: number;
  month: number;
  usedEvents: Set<string>;
}

interface GameEvent {
  id: string;
  title: string;
  description: string;
  choices: GameChoice[];
}

interface GameChoice {
  text: string;
  outcome: {
    funds: number;
    users: number;
    growth: number;
    message: string;
  };
}

const initialState: GameState = {
  funds: 100000,
  users: 0,
  growth: 0,
  month: 0,
  usedEvents: new Set()
};

const gameEvents: GameEvent[] = [
  {
    id: "marketing",
    title: "Marketing Opportunity",
    description: "A viral marketing opportunity has emerged. How would you like to proceed?",
    choices: [
      {
        text: "Invest heavily in social media ads",
        outcome: {
          funds: -20000,
          users: 5000,
          growth: 15,
          message: "Your campaign went viral! New users are flooding in."
        }
      },
      {
        text: "Focus on organic growth",
        outcome: {
          funds: -5000,
          users: 1000,
          growth: 5,
          message: "Steady but slower growth through word-of-mouth."
        }
      }
    ]
  },
  {
    id: "feature",
    title: "Product Development",
    description: "Users are requesting a new feature. What's your approach?",
    choices: [
      {
        text: "Fast-track development",
        outcome: {
          funds: -30000,
          users: 3000,
          growth: 10,
          message: "The feature launched quickly but required more resources."
        }
      },
      {
        text: "Take time to perfect it",
        outcome: {
          funds: -15000,
          users: 1500,
          growth: 7,
          message: "A polished feature release that users appreciate."
        }
      }
    ]
  },
  {
    id: "partnership",
    title: "Strategic Partnership",
    description: "A larger company wants to integrate your solution. What's your strategy?",
    choices: [
      {
        text: "Full integration partnership",
        outcome: {
          funds: 40000,
          users: 8000,
          growth: 20,
          message: "The partnership is a huge success, bringing significant growth!"
        }
      },
      {
        text: "Limited API integration",
        outcome: {
          funds: 15000,
          users: 3000,
          growth: 8,
          message: "A balanced approach that maintains independence while growing."
        }
      }
    ]
  },
  {
    id: "hiring",
    title: "Team Expansion",
    description: "Your workload is increasing. How do you want to scale the team?",
    choices: [
      {
        text: "Hire senior developers",
        outcome: {
          funds: -50000,
          users: 2000,
          growth: 12,
          message: "Experienced developers accelerate product development."
        }
      },
      {
        text: "Build a junior team",
        outcome: {
          funds: -20000,
          users: 1000,
          growth: 5,
          message: "The team grows steadily with fresh perspectives."
        }
      }
    ]
  },
  {
    id: "infrastructure",
    title: "Technical Challenge",
    description: "Your platform is experiencing scaling issues. How do you respond?",
    choices: [
      {
        text: "Complete infrastructure overhaul",
        outcome: {
          funds: -40000,
          users: 4000,
          growth: 15,
          message: "The new architecture handles scale beautifully!"
        }
      },
      {
        text: "Gradual optimization",
        outcome: {
          funds: -15000,
          users: 2000,
          growth: 8,
          message: "Performance improves while maintaining stability."
        }
      }
    ]
  }
];

export function StartupGame() {
  const [gameState, setGameState] = useState<GameState>(initialState);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<GameEvent | null>(null);
  const [outcome, setOutcome] = useState<string | null>(null);

  const startGame = () => {
    setGameState(initialState);
    setIsPlaying(true);
    triggerRandomEvent(new Set());
  };

  const triggerRandomEvent = (usedEvents: Set<string>) => {
    // Filter out already used events
    const availableEvents = gameEvents.filter(event => !usedEvents.has(event.id));
    
    if (availableEvents.length === 0) {
      // If all events have been used, reset the pool
      setCurrentEvent(gameEvents[Math.floor(Math.random() * gameEvents.length)]);
    } else {
      // Select a random event from available ones
      const event = availableEvents[Math.floor(Math.random() * availableEvents.length)];
      setCurrentEvent(event);
      usedEvents.add(event.id);
    }
    setOutcome(null);
  };

  const makeChoice = (choice: GameChoice) => {
    const newState = {
      ...gameState,
      funds: gameState.funds + choice.outcome.funds,
      users: gameState.users + choice.outcome.users,
      growth: gameState.growth + choice.outcome.growth,
      month: gameState.month + 1,
      usedEvents: gameState.usedEvents
    };

    setGameState(newState);
    setOutcome(choice.outcome.message);

    if (newState.funds <= 0) {
      setIsPlaying(false);
    } else {
      setTimeout(() => {
        setCurrentEvent(null);
        setOutcome(null);
        if (newState.month < 12) {
          triggerRandomEvent(newState.usedEvents);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
  };

  const getScore = () => {
    return Math.floor((gameState.users * 0.5) + (gameState.funds * 0.0001) + (gameState.growth * 100));
  };

  return (
    <section className="py-24 bg-muted/50 rounded-3xl relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ever dreamed of building your own startup? Step into the shoes of a founder 
            and see if you have what it takes to turn your vision into reality. No real 
            money at stake—just pure entrepreneurial adventure!
          </p>
        </motion.div>

        {!isPlaying ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            {gameState.month > 0 && (
              <Card className="p-6 mb-8 max-w-md mx-auto bg-card/50 backdrop-blur-sm">
                <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Your Startup Journey</h3>
                <p className="mb-4">Achievement Score: {getScore()}</p>
                <p className="text-muted-foreground">
                  You led your startup for {gameState.month} exciting months!
                </p>
                <ul className="mt-4 space-y-2">
                  <li>💰 ${gameState.funds.toLocaleString()} in the bank</li>
                  <li>👥 {gameState.users.toLocaleString()} happy users</li>
                  <li>📈 {gameState.growth}% growth trajectory</li>
                </ul>
              </Card>
            )}
            <Button 
              onClick={startGame}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary"
            >
              {gameState.month > 0 ? "Embark on a New Adventure" : "Start Your Startup Journey"}
            </Button>
            {!gameState.month && (
              <p className="mt-4 text-sm text-muted-foreground">
                Don't worry, it's just a simulation—but the excitement is real!
              </p>
            )}
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            {currentEvent && (
              <motion.div
                key={currentEvent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-2xl mx-auto"
              >
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <AlertCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{currentEvent.title}</h3>
                      <p className="text-sm text-muted-foreground">Month {gameState.month + 1}</p>
                    </div>
                  </div>
                  
                  <p className="mb-6">{currentEvent.description}</p>
                  
                  {!outcome ? (
                    <div className="space-y-4">
                      {currentEvent.choices.map((choice, index) => (
                        <Button
                          key={index}
                          onClick={() => makeChoice(choice)}
                          variant="outline"
                          className="w-full text-left justify-start h-auto p-4"
                        >
                          {choice.text}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <p>{outcome}</p>
                    </div>
                  )}
                </Card>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <Card className="p-4 text-center">
                    <DollarSign className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Funds</p>
                    <p className="font-semibold">${gameState.funds.toLocaleString()}</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Users</p>
                    <p className="font-semibold">{gameState.users.toLocaleString()}</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Growth</p>
                    <p className="font-semibold">{gameState.growth}%</p>
                  </Card>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}