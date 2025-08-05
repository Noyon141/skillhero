# AI Service Setup Guide

This guide will help you configure the AI service for roadmap generation.

## Available AI Services

The application supports multiple AI services for generating career roadmaps:

### 1. OpenAI (Recommended)

- **Service**: OpenAI GPT-4
- **Setup**: Get API key from [OpenAI Platform](https://platform.openai.com/)
- **Environment Variable**: `OPENAI_API_KEY`

### 2. Anthropic

- **Service**: Claude 3 Sonnet
- **Setup**: Get API key from [Anthropic Console](https://console.anthropic.com/)
- **Environment Variable**: `ANTHROPIC_API_KEY`

### 3. Cohere AI

- **Service**: Cohere Command Model
- **Setup**: Get API key from [Cohere Console](https://console.cohere.ai/)
- **Environment Variable**: `COHERE_AI_API_KEY`
- **Package**: Already installed (`cohere-ai` v2)

## Setup Instructions

### Step 1: Choose Your AI Service

Select one of the above services based on your preference and budget.

### Step 2: Get API Keys

- **OpenAI**: Sign up at [OpenAI Platform](https://platform.openai.com/) and create an API key
- **Anthropic**: Sign up at [Anthropic Console](https://console.anthropic.com/) and create an API key
- **Cohere**: Sign up at [Cohere Console](https://console.cohere.ai/) and create an API key

### Step 3: Configure Environment Variables

Create a `.env.local` file in your project root and add your chosen service:

```bash
# For OpenAI
OPENAI_API_KEY=sk-your-openai-api-key-here

# OR for Anthropic
ANTHROPIC_API_KEY=sk-ant-your-anthropic-api-key-here

# OR for Cohere AI
COHERE_AI_API_KEY=your-cohere-api-key-here
```

### Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to `/dashboard/roadmap`
3. Enter a career goal and level
4. Click "Generate Roadmap"
5. Verify that the AI generates a realistic roadmap

## API Response Format

The AI service should return JSON in this format:

```json
{
  "phases": [
    {
      "title": "Foundation Phase",
      "description": "Build fundamental skills and knowledge",
      "milestones": [
        "Learn basic programming concepts",
        "Understand web development fundamentals"
      ],
      "skills": ["HTML", "CSS", "JavaScript"],
      "resources": [
        "https://developer.mozilla.org/en-US/docs/Web/HTML",
        "https://developer.mozilla.org/en-US/docs/Web/CSS"
      ]
    }
  ]
}
```

## Troubleshooting

### Common Issues:

1. **"No AI service configured"**

   - Make sure you've set up at least one AI service environment variable
   - Check that your `.env.local` file is in the project root

2. **"AI service unavailable"**

   - Verify your API key is correct
   - Check your internet connection
   - Ensure your API key has sufficient credits

3. **"Failed to parse AI response"**
   - The AI service might not be returning valid JSON
   - Check the AI service logs for more details

### Debug Mode:

To see detailed error messages, check your browser's developer console and server logs.

## Cost Considerations

- **OpenAI**: ~$0.03 per request (GPT-4)
- **Anthropic**: ~$0.015 per request (Claude 3 Sonnet)
- **Cohere**: ~$0.01 per request (Command model)

## Security Notes

- Never commit your API keys to version control
- Use environment variables for all sensitive data
- Consider implementing rate limiting for production use
- Monitor API usage to control costs
