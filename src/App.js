import React, { useState, useEffect } from 'react';
import './index.css';

const coatTypes = {
  Dc1: "Double coat type one - Heavy double-coated breeds requiring removal of dead undercoat with minimal trimming",
  Dc2: "Double coat type two - Double-coated breeds with longer topcoat that may require more extensive grooming",
  Si: "Silky coat - Characterized by texture rather than length, may require varying amounts of trimming",
  Sm: "Smooth coat - Short and tight to the body, low-maintenance grooming needs",
  Wi: "Wire coat - Harsh dense topcoat with softer undercoat, traditionally hand-stripped",
  Wo: "Wool coat - Requires specific drying techniques and trimming styles"
};

const breeds = [
  {
    name: "Airedale Terrier",
    group: "Terrier",
    coatType: "Wi",
    characteristics: "Largest of the Terriers, a muscular, active, fairly cobby dog. Quick of movement, on the tiptoe of expectation at any moment.",
    groomingNotes: "Wire coat traditionally hand-stripped to maintain texture and color. Pet clips common but affect coat texture.",
    imageUrl: "/images/Airedale Terrier.jpg"
  },
  {
    name: "Alaskan Malamute",
    group: "Working",
    coatType: "Dc1",
    characteristics: "Powerful, substantial dog with a deep chest and strong, well-muscled body. Built for endurance and strength.",
    groomingNotes: "Heavy double coat requiring regular brushing to manage shedding. Minimal trimming needed.",
    imageUrl: "/images/Alaskan Malamute.jpg"
  },
  {
    name: "Australian Shepard",
    group: "Pastoral",
    coatType: "Dc1",
    characteristics: "Athletic, agile herding dog with strong herding and guarding instincts. Highly intelligent and versatile working dog.",
    groomingNotes: "Medium-length double coat needing regular brushing to prevent matting and manage shedding.",
    imageUrl: "/images/Austrailian Shepard.jpg"
  },
  {
    name: "Basset Hound",
    group: "Hound",
    coatType: "Sm",
    characteristics: "Low-set dog of considerable substance, short-legged but active. Capable of great endurance in the field.",
    groomingNotes: "Smooth coat requiring minimal grooming. Regular brushing helps maintain coat shine.",
    imageUrl: "/images/Basset Hound.jpg"
  },
  {
    name: "Beagle",
    group: "Hound",
    coatType: "Sm",
    characteristics: "Sturdy, compact hound, conveying the impression of quality without coarseness.",
    groomingNotes: "Smooth, dense double coat requiring minimal grooming. Regular brushing maintains coat health.",
    imageUrl: "/images/Beagle.jpg"
  },
  {
    name: "Bernedoodle",
    group: "Mixed",
    coatType: "Wo",
    characteristics: "Mixed breed combining Bernese Mountain Dog and Poodle characteristics. Size and coat type can vary.",
    groomingNotes: "Coat type varies but usually requires regular professional grooming. Can range from wavy to curly.",
    imageUrl: "/images/Bernedoogle (mixed).jpg"
  },
  {
    name: "Bichon Frise",
    group: "Toy",
    coatType: "Wo",
    characteristics: "Small, sturdy, white powder puff of a dog with merry temperament.",
    groomingNotes: "Requires regular professional grooming to maintain characteristic rounded appearance.",
    imageUrl: "/images/Bichon Frise.jpg"
  },
  {
    name: "Border Collie",
    group: "Pastoral",
    coatType: "Dc1",
    characteristics: "Athletic, medium-sized herding dog known for its intense stare and working ability.",
    groomingNotes: "Moderate grooming needs. Regular brushing required to manage shedding double coat.",
    imageUrl: "/images/Border Collie.jpg"
  },
  {
    name: "Boston Terrier",
    group: "Utility",
    coatType: "Sm",
    characteristics: "Small, compact, well-balanced dog with distinctive tuxedo coat pattern.",
    groomingNotes: "Short, smooth coat requiring minimal grooming. Weekly brushing sufficient.",
    imageUrl: "/images/Boston Terrier.jpg"
  },
  {
    name: "Boxer",
    group: "Working",
    coatType: "Sm",
    characteristics: "Well-muscled, powerful dog with distinctive head. Alert and intelligent expression.",
    groomingNotes: "Smooth coat needs minimal grooming. Regular wiping with a damp cloth maintains shine.",
    imageUrl: "/images/Boxer.jpg"
  },
  {
    name: "Chihuahua",
    group: "Toy",
    coatType: "Sm",
    characteristics: "Smallest breed of dog. Alert, swift-moving, compact little dog.",
    groomingNotes: "Smooth coat requires minimal grooming. Regular brushing keeps coat healthy.",
    imageUrl: "/images/Chihuahua.jpg"
  },
  {
    name: "Cocker Spaniel",
    group: "Gundog",
    coatType: "Si",
    characteristics: "Merry, sturdy, sporting dog. Well balanced and compact.",
    groomingNotes: "Silky coat requires regular grooming to prevent matting, especially on ears and legs.",
    imageUrl: "/images/Cocker Spaniel.jpg"
  },
  {
    name: "Collie",
    group: "Pastoral",
    coatType: "Dc1",
    characteristics: "Elegant dog of great beauty, standing with impassive dignity.",
    groomingNotes: "Abundant double coat requires regular thorough brushing to prevent matting.",
    imageUrl: "/images/Collie.jpg"
  },
  {
    name: "Corgi",
    group: "Pastoral",
    coatType: "Dc1",
    characteristics: "Low-set, strong, sturdily built dog with alert and intelligent expression.",
    groomingNotes: "Double coat needs regular brushing to manage shedding. More frequent during seasonal changes.",
    imageUrl: "/images/Corgi.jpg"
  },
  {
    name: "Dalmation",
    group: "Utility",
    coatType: "Sm",
    characteristics: "Distinctively spotted dog, well-balanced, strong, muscular and active.",
    groomingNotes: "Short, dense coat requires minimal grooming. Regular brushing removes dead hair.",
    imageUrl: "/images/Dalmation.jpg"
  },
  {
    name: "Doberman Pinscher",
    group: "Working",
    coatType: "Sm",
    characteristics: "Elegant appearance combining strength and agility. Noble bearing.",
    groomingNotes: "Smooth coat needs minimal grooming. Regular wiping maintains shine.",
    imageUrl: "/images/Doberman Pinscher.jpg"
  },
  {
    name: "Fox Terrier",
    group: "Terrier",
    coatType: "Wi",
    characteristics: "Active and lively, bone and strength in small compass.",
    groomingNotes: "Wire coat traditionally hand-stripped. Regular grooming maintains texture.",
    imageUrl: "/images/Fox Terrier.jpg"
  },
  {
    name: "French Bulldog",
    group: "Utility",
    coatType: "Sm",
    characteristics: "Compact, well-built with good bone, muscular dog of smart appearance.",
    groomingNotes: "Short coat requires minimal grooming. Regular cleaning of facial wrinkles important.",
    imageUrl: "/images/French Bulldog.jpg"
  },
  {
    name: "German Shepard",
    group: "Pastoral",
    coatType: "Dc1",
    characteristics: "Well-muscled, alert dog with noble character. Strong, agile and full of quality.",
    groomingNotes: "Dense double coat requires regular brushing to manage shedding.",
    imageUrl: "/images/German Shepard.jpg"
  },
  {
    name: "German Shorthair Pointer",
    group: "Gundog",
    coatType: "Sm",
    characteristics: "Athletic, noble pointer of distinct appearance. Balanced and powerful.",
    groomingNotes: "Short coat needs minimal grooming. Weekly brushing sufficient.",
    imageUrl: "/images/German Shorthair Pointer.jpg"
  },
  {
    name: "Golden Doodle",
    group: "Mixed",
    coatType: "Wo",
    characteristics: "Mixed breed combining Golden Retriever and Poodle traits. Friendly and intelligent.",
    groomingNotes: "Coat type varies but usually requires regular professional grooming.",
    imageUrl: "/images/Golden Doodle (mixed).jpg"
  },
  {
    name: "Golden Retriever",
    group: "Gundog",
    coatType: "Dc1",
    characteristics: "Symmetrical, balanced dog with kindly expression. Active and capable.",
    groomingNotes: "Dense water-repellent double coat needs regular thorough brushing.",
    imageUrl: "/images/Golden Retriever.jpg"
  },
  {
    name: "Labrador Retriever",
    group: "Gundog",
    coatType: "Dc1",
    characteristics: "Strongly built, short-coupled, very active dog. Broad skull, chest and ribs.",
    groomingNotes: "Dense double coat requires regular brushing. Sheds seasonally.",
    imageUrl: "/images/Labrador Retriever.jpg"
  },
  {
    name: "Lhasa Apso",
    group: "Utility",
    coatType: "Dc2",
    characteristics: "Well-balanced, sturdy dog with heavy coat. Alert and steady temperament.",
    groomingNotes: "Long double coat requires regular grooming to prevent matting.",
    imageUrl: "/images/Lhasa_Apso.jpg"
  },
  {
    name: "Maltese",
    group: "Toy",
    coatType: "Si",
    characteristics: "Small dog with long, silky, pure white coat. Refined and sprightly.",
    groomingNotes: "Long silky coat requires daily grooming to prevent tangles.",
    imageUrl: "/images/Maltese.jpg"
  },
  {
    name: "Newfoundland",
    group: "Working",
    coatType: "Dc1",
    characteristics: "Sweet-tempered dog of massive size. Powerful and active.",
    groomingNotes: "Heavy double coat requires regular grooming to prevent matting.",
    imageUrl: "/images/Newfoundland.jpg"
  },
  {
    name: "Pomeranian",
    group: "Toy",
    coatType: "Dc2",
    characteristics: "Compact, short-coupled dog. Alert carriage and abundant textured coat.",
    groomingNotes: "Profuse double coat needs regular brushing to prevent matting.",
    imageUrl: "/images/Pomeranian.jpg"
  },
  {
    name: "Poodle",
    group: "Utility",
    coatType: "Wo",
    characteristics: "Well-balanced, elegant dog with distinctive curly coat.",
    groomingNotes: "Requires regular professional grooming. Various traditional clip styles possible.",
    imageUrl: "/images/Poodle.jpg"
  },
  {
    name: "Pug",
    group: "Toy",
    coatType: "Sm",
    characteristics: "Square and cobby dog with distinctive wrinkled face.",
    groomingNotes: "Short coat needs minimal grooming. Regular cleaning of facial wrinkles essential.",
    imageUrl: "/images/pug.jpg"
  },
  {
    name: "Schnauzer",
    group: "Utility",
    coatType: "Wi",
    characteristics: "Sturdy, compact dog with distinctive beard and eyebrows.",
    groomingNotes: "Wire coat traditionally hand-stripped. Regular grooming maintains texture.",
    imageUrl: "/images/Schnauzer.jpg"
  },
  {
    name: "Scottish Terrier",
    group: "Terrier",
    coatType: "Wi",
    characteristics: "Short-legged, alert terrier with distinctive profile and beard.",
    groomingNotes: "Wire coat traditionally hand-stripped. Requires regular professional grooming.",
    imageUrl: "/images/Scottish Terrier.jpg"
  },
  {
    name: "Shih Tzu",
    group: "Utility",
    coatType: "Dc2",
    characteristics: "Small, sturdy dog with distinctive chrysanthemum-like face.",
    groomingNotes: "Long double coat requires daily grooming to prevent matting.",
    imageUrl: "/images/Shih Tzu.jpg"
  },
  {
    name: "Vizsla",
    group: "Gundog",
    coatType: "Sm",
    characteristics: "Medium-sized, elegant hunting dog with distinctive golden-rust coat.",
    groomingNotes: "Short coat requires minimal grooming. Weekly brushing maintains shine.",
    imageUrl: "/images/Vizsla.jpg"
  },
  {
    name: "West Highland White Terrier",
    group: "Terrier",
    coatType: "Wi",
    characteristics: "Small, game, well-balanced hardy terrier with self-esteem.",
    groomingNotes: "Wire coat traditionally hand-stripped. Regular grooming maintains white color.",
    imageUrl: "/images/West Highland White Terrier.jpg"
  },
  {
    name: "Yorkshire Terrier",
    group: "Toy",
    coatType: "Si",
    characteristics: "Long-coated toy terrier with compact, neat appearance.",
    groomingNotes: "Long silky coat requires daily grooming to prevent tangles.",
    imageUrl: "/images/Yorkie.jpg"
  }
];

function QuizMode({ breeds, onExitQuiz }) {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0); 
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Create matching questions for coat types
    const questions = breeds.map(breed => ({
      breedName: breed.name,
      correctAnswer: breed.coatType,
      options: Object.keys(coatTypes).sort(() => Math.random() - 0.5).slice(0, 4),
      imageUrl: breed.imageUrl
    })).sort(() => Math.random() - 0.5).slice(0, 10); // Take 10 random questions
    
    // Ensure correct answer is in options
    questions.forEach(q => {
      if (!q.options.includes(q.correctAnswer)) {
        q.options[0] = q.correctAnswer;
        q.options.sort(() => Math.random() - 0.5);
      }
    });
    
    setQuizQuestions(questions);
  }, [breeds]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold">Quiz Complete!</h2>
        <p className="text-xl">Your score: {score} out of {quizQuestions.length}</p>
        <button
          onClick={onExitQuiz}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Return to Study Mode
        </button>
      </div>
    );
  }

  return quizQuestions.length > 0 ? (
    <div className="space-y-6">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-500">Question {currentQuestion + 1} of {quizQuestions.length}</p>
        <p className="text-sm text-gray-500">Score: {score}</p>
      </div>

      <div className="mb-6">
        <img 
          src={quizQuestions[currentQuestion].imageUrl} 
          alt="Dog breed" 
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <p className="text-lg font-semibold mb-4">
        What type of coat does the {quizQuestions[currentQuestion].breedName} have?
      </p>

      <div className="grid gap-3">
        {quizQuestions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            disabled={selectedAnswer !== null}
            className={`p-3 rounded-md text-left transition-colors ${
              selectedAnswer === null 
                ? 'hover:bg-gray-100 bg-white' 
                : option === quizQuestions[currentQuestion].correctAnswer
                  ? 'bg-green-100'
                  : selectedAnswer === option
                    ? 'bg-red-100'
                    : 'bg-white'
            } ${selectedAnswer === null ? '' : 'cursor-default'}`}
          >
            {option} - {coatTypes[option]}
          </button>
        ))}
      </div>

      {selectedAnswer !== null && (
        <button
          onClick={handleNext}
          className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
        </button>
      )}
    </div>
  ) : (
    <div>Loading quiz questions...</div>
  );
}

export default function BreedLearningApp() {
  const [currentBreedIndex, setCurrentBreedIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [mode, setMode] = useState('study');

  const handleNextBreed = () => {
    if (currentBreedIndex < breeds.length - 1) {
      setCurrentBreedIndex(currentBreedIndex + 1);
      setShowAnswer(false);
    } else {
      setCurrentBreedIndex(0);
      setShowAnswer(false);
    }
  };

  const handleReveal = () => {
    setShowAnswer(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">Dog Breed Identification</h1>
                  <div className="flex justify-center space-x-4 mb-4">
                    <button
                      onClick={() => setMode('study')}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        mode === 'study' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Study Mode
                    </button>
                    <button
                      onClick={() => setMode('quiz')}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        mode === 'quiz' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Quiz Mode
                    </button>
                  </div>
                </div>

                {mode === 'quiz' ? (
                  <QuizMode 
                    breeds={breeds} 
                    onExitQuiz={() => setMode('study')} 
                  />
                ) : (
                  <>
                    <div className="mb-8">
                      <img 
                        src={breeds[currentBreedIndex].imageUrl} 
                        alt="Dog breed to identify" 
                        className="w-full rounded-lg shadow-md"
                      />
                    </div>

                    {!showAnswer ? (
                      <button
                        onClick={handleReveal}
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                      >
                        Reveal Breed
                      </button>
                    ) : (
                      <div className="space-y-4">
                        <h2 className="text-xl font-bold">{breeds[currentBreedIndex].name}</h2>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold">Group: {breeds[currentBreedIndex].group}</p>
                          <p className="text-sm font-semibold">Coat Type: 
                            <span className="font-normal"> {breeds[currentBreedIndex].coatType} - {coatTypes[breeds[currentBreedIndex].coatType]}</span>
                          </p>
                          <div>
                            <p className="text-sm font-semibold">Characteristics:</p>
                            <p className="text-sm">{breeds[currentBreedIndex].characteristics}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold">Grooming Notes:</p>
                            <p className="text-sm">{breeds[currentBreedIndex].groomingNotes}</p>
                          </div>
                        </div>
                        <button
                          onClick={handleNextBreed}
                          className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                        >
                          Next Breed
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}