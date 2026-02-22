---
title: "Understanding Internal Developer Platforms"
date: 2024-01-15
author: "Hector Luciano"
tags: ["IDP", "Platform Engineering", "DevOps", "Cloud Architecture"]
excerpt: "Internal Developer Platforms are centralized environments that standardize development, operations, and deployment processes. Here's what every architect needs to know."
pillar: "cloud"
---

Internal Developer Platforms (IDP) are centralized environments that standardize development, operations, and deployment processes within an organization. They aim to streamline workflows and improve productivity by providing a cohesive preset of tools and governance.

Most companies that have implemented DevOps are now having the need to implement some sort of IDP. This IDP can take the shape of overloaded CI/CD tools like Jenkins, GitHub, homegrown solutions and much more. However, it is clear that we need something better — Jenkins should just be your CI/CD machine and nothing more. GitHub is great for storing source code, running workflows and collaborating at a distributed level, but it is not your service catalog.

## 1. What is IDP?

Let's explore what some of the industry leaders describe as an IDP.

**Cloud Native Computing Foundation:** An internal developer platform (IDP) is a customized system created in-house or by a third party to improve efficiency for an organization's Dev and Ops teams. IDPs provide a central interface where developers can access all the tools and services they need for coding, building, testing, and deploying applications. They aim to remove friction during deployment by standardizing tools and best practices. At their core, IDPs enable engineers to build, test, integrate, and deploy applications faster and with higher quality.

**Humanitec:** An Internal Developer Platform (IDP) is the sum of all the tech and tools that a platform engineering team binds together to pave golden paths for developers. IDPs lower cognitive load across the engineering organization and enable developer self-service, without abstracting away context from developers or making the underlying tech inaccessible. Well designed IDPs follow a Platform as a Product approach.

**Microsoft:** An internal developer platform is focused on a company's internal development practices. You define a set of recommended and supported development paths to production and incrementally "pave" a way through them with an internal platform. Paved paths within an internal developer platform have similar goals to real-world trails — as more people use them, they're paved to improve safety while maintaining velocity and throughput.

**Cortex.io:** An Internal Developer Portal (IDP) is the engineering system of record for tracking, improving, and building high-quality software. From services and APIs to Kubernetes clusters and data pipelines — IDPs abstract away the complexities of ensuring software security, maturity, production readiness, and more.

## 2. So What Does It Really Mean?

**Hector Luciano:** An Internal Developer Platform is a self-service Product made of a set of Tools and Capabilities to empower developers to be self-sufficient and deliver their software efficiently, while enforcing organization standards in a simple way.

## What Problem Does IDP Solve?

**Engineers Perspective:**
- Reduce the cognitive load while improving productivity
- Increase software quality and observability
- Self Service: let me build at my speed and collaborate with others

**Business Perspective:**
- Speed time to market in an increasingly competitive arena
- Automation and enforcement of Governance, Security Policy
- Catalog of Resources and ownership

## 3. How Did We Get Here?

The evolution of development practices leading to the rise of IDPs mirrors the broader history of DevOps: from manual deployments and monolithic applications, through containerization and microservices, to the need for coordinated, standardized developer experiences at scale.

## IDP vs. Traditional Tools

**Jenkins:** Jenkins excels as a CI/CD machine but shouldn't be overloaded with additional responsibilities. It's not a service catalog or an operations updater.

**GitHub:** While GitHub is excellent for source code management and collaboration, it isn't a comprehensive service catalog. It lacks features like monitoring services and operational updates.

## 4. How Does IDP Help Reduce Cognitive Load?

IDPs simplify decision-making for developers. By providing a consistent set of tools and practices, they reduce cognitive load, allowing teams to focus on building quality software instead of configuring tooling and processes.

## Why Do We Need IDPs?

**DevOps Complexity:** As companies adopt DevOps practices, the tool landscape becomes fragmented. CI/CD tools like Jenkins, GitLab, or GitHub serve specific purposes but lack cohesion.

**Beyond Lipstick Solutions:** IDPs go beyond superficial fixes. Rather than applying "lipstick" to existing tools, they offer a holistic approach to software delivery.

## 5. What Are the Pros and Cons of IDP?

### Pros:
- Streamlined workflows
- Improved collaboration
- Reduced tool sprawl
- Enhanced governance

### Cons:
- Implementation challenges
- Adoption across teams
- Balancing customization and standardization

## 6. Is Backstage.io an IDP?

Backstage.io, an open-source project by Spotify, aims to be an IDP. It centralizes services, documentation, and workflows, making it a potential solution for managing the entire software lifecycle.

In summary, IDPs empower organizations to move beyond fragmented tools, fostering collaboration, efficiency, and better software delivery. 🚀
