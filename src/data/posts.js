export const posts = [
  {
    slug: 'freephotobox-architecture-deep-dive',
    title: 'FreePhotoBox: A Multi-Cloud Architecture Deep Dive',
    excerpt: 'How I designed and built a cloud-native photo management platform combining AWS and Azure services for analytics, storage, and observability.',
    date: '2025-12-15',
    readTime: '12 min read',
    tags: ['AWS', 'Azure', 'Architecture', 'Serverless'],
    featured: true,
    content: `
Building FreePhotoBox taught me more about cloud architecture than any tutorial ever could. Here's the full breakdown of how I designed a multi-cloud photo management system.

## The Challenge

I wanted to build a photo management platform that could:
- Handle photo uploads at scale
- Provide real-time analytics on photo ingestion
- Monitor system health proactively
- Keep costs manageable with serverless architecture

## Architecture Overview

The system spans both AWS and Azure, using each platform for what it does best.

### AWS Services

**S3** serves as the primary storage layer. Photos land here first, triggering the entire pipeline.

**Lambda** functions handle:
- Image processing and thumbnail generation
- Metadata extraction
- Analytics event publishing

**DynamoDB** stores photo metadata and user data. The single-table design keeps queries fast and costs predictable.

**CloudWatch** provides observability across the AWS side of the architecture.

### Azure Integration

Azure handles the analytics pipeline. I chose Azure for this because of its strong integration with Power BI for dashboards.

## Key Decisions

### Why Multi-Cloud?

This wasn't complexity for its own sake. Each cloud has strengths:
- AWS Lambda has better cold start times for our image processing
- Azure's analytics stack integrates cleanly with the BI tools our users wanted

### Single-Table DynamoDB Design

Instead of multiple tables, I use a single DynamoDB table with composite keys. This means:
- One provisioned table to manage
- Efficient queries across different entity types
- Simpler backup and restore

## Lessons Learned

**Start with monitoring.** I should have set up CloudWatch dashboards before writing business logic. Debugging serverless without visibility is painful.

**Design for failure.** Every Lambda has retry logic and dead letter queues. The system keeps running even when individual components fail.

**Cost modeling matters.** Serverless isn't automatically cheap. I track costs per-function and optimize the expensive ones.

## What I'd Do Differently

- Use AWS CDK from day one instead of migrating to it later
- Implement distributed tracing earlier with X-Ray
- Build a local development environment that mimics the cloud services

The full technical documentation is on my GitHub, and I wrote about specific implementation details on Medium.
`
  },
  {
    slug: 'why-i-stopped-using-percentage-skill-bars',
    title: 'Why I Stopped Using Percentage Skill Bars',
    excerpt: 'The case against self-assessed skill percentages and what signals actually matter for demonstrating technical competence.',
    date: '2026-01-20',
    readTime: '5 min read',
    tags: ['Career', 'Portfolios', 'Opinion'],
    featured: false,
    content: `
I used to have skill bars on my portfolio. React: 94%. Node.js: 90%. Git: 88%.

Then I realized how absurd that was.

## The Problem with Percentages

What does "94% React" even mean? Am I 6% away from knowing everything about React? Did I take a test? Compared to whom?

These numbers are completely made up. Worse, they signal junior thinking—the belief that technical skill is a linear scale you can measure yourself on.

## What Senior Engineers Actually Care About

When I interview candidates or review portfolios, skill bars tell me nothing. Here's what does:

### 1. What You Built

Show me a project. Tell me:
- What problem it solved
- What tradeoffs you made
- What you'd do differently now

This tells me more than any percentage.

### 2. How You Think

Can you articulate why you chose React over Vue? What's the tradeoff between a monolith and microservices? When would you NOT use a database index?

Technical judgment beats technical breadth.

### 3. What You're Learning

Nobody knows everything. Saying "I'm currently learning Kubernetes" shows self-awareness. Claiming "90% Docker" suggests you've stopped growing.

## What I Use Instead

My portfolio now lists technologies by category:
- **Languages & Frameworks:** JavaScript, TypeScript, React, Node.js
- **Cloud:** AWS, Azure, Serverless
- **Tools:** Git, Docker, CI/CD

No percentages. No star ratings. Just capabilities, demonstrated through projects that use them.

## The Real Signal

The best signal of competence is work that speaks for itself. A well-architected project with clear documentation beats a wall of 90%+ skill bars every time.

If you're still using skill percentages, consider what they're actually communicating—and whether that's the impression you want to make.
`
  },
  {
    slug: 'lessons-from-debugging-production',
    title: 'What Debugging Production Systems Taught Me',
    excerpt: 'Real incidents, real lessons. How production issues shaped my approach to building resilient systems.',
    date: '2026-02-10',
    readTime: '8 min read',
    tags: ['Engineering', 'DevOps', 'Lessons'],
    featured: true,
    content: `
Every production incident is a lesson. Here are a few that changed how I build systems.

## The Silent Failure

Our image processing Lambda was silently dropping about 3% of uploads. No errors in logs. No alerts. Users complained that some photos "just disappeared."

**What happened:** The Lambda was timing out on large files, but our error handling caught the timeout and returned successfully—without processing the image.

**The lesson:** Distinguish between "handled gracefully" and "actually succeeded." Now every critical operation has explicit success verification, not just error absence.

## The Cascade

We added a new feature that called an external API. Load was fine in testing. Then it hit production.

The external API had a 2-second response time under load. Our service waited. Requests backed up. The queue filled. The whole system ground to a halt.

**The lesson:** Always set timeouts. Always have circuit breakers. An external dependency should never be able to take down your system.

\`\`\`javascript
// Before: Hope and pray
const response = await externalApi.fetch(data);

// After: Trust but verify
const response = await Promise.race([
  externalApi.fetch(data),
  timeout(5000, 'External API timeout')
]);
\`\`\`

## The Wrong Index

A query that ran in milliseconds during development took 30 seconds in production. Same code. Same database. Different data volume.

Turns out our test data didn't cover a specific edge case. The production data had 100x more records in one particular category, and our index didn't cover the query pattern we were using.

**The lesson:** Test with production-scale data. Better yet, test with production data (anonymized). Query plans change with data distribution.

## What I Do Differently Now

### 1. Observability First

Before writing business logic, I set up:
- Structured logging with correlation IDs
- Key metrics dashboards
- Alerts for anomalies, not just failures

### 2. Failure Testing

I ask: "What happens when this fails?" for every integration point. Then I actually test it.

### 3. Runbooks

Every alert has a runbook. Even if it's just "check this dashboard, escalate if unclear." When you're debugging at 2 AM, you'll thank yourself.

## The Mindset Shift

Junior engineers optimize for the happy path. Senior engineers optimize for what happens when things go wrong—because they always do.

Production will humble you. The question is whether you learn from it.
`
  }
];

export const getPostBySlug = (slug) => {
  return posts.find(post => post.slug === slug);
};

export const getFeaturedPosts = () => {
  return posts.filter(post => post.featured);
};

export const getAllPosts = () => {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
};
