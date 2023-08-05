import { Configuration, OpenAIApi } from "openai";

const configuration=new Configuration({apiKey:process.env.OPENAI_API_KEY,});

const openai=new OpenAIApi(configuration);


const basePromptPrefix = 
`
"Write me a table of contents for a concise engaging LinkedIn post with the title below. give specific points with clear headings.

Title: 
`;
const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.7,
    max_tokens: 500,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  const secondPrompt = 
  `
  Take the table of contents and title of the Linkedin post below and generate a concise to-point Linkedin post written in the style of Paul Graham. Make it feel like a story and have short brief sentences which make it engaging and readable. Don't just list the points. Go deep into each one. Explain why in a couple of solid sentences.

  Title: ${req.body.userInput}

  Table of Contents: ${basePromptOutput.text}

  Linkedin Post:
  `

  const secondPromptCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${secondPrompt}`,
    temperature: 0.85,
    max_tokens: 1250,
  });
  const secondPromptOutput = secondPromptCompletion.data.choices.pop();


  res.status(200).json({ output: secondPromptOutput});
};

export default generateAction;