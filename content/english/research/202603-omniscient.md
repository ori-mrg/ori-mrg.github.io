---
title: "Scaling Robotic Infrastructure: A Case Study in Orchestration"
meta_title: ""
date: 2026-06-13T05:00:00Z
image: "images/research/202604-omniscient/multi_robot.jpg"
categories: ["deployment", "site-driven robotics"]
author: "Daniele De Martini"
tags: ["Omniscient Innovations Ltd", "Gompels Healthcare"]
draft: false
---


This research project, conducted in collaboration with Omniscient Innovations Ltd, Gompels Healthcare Ltd, and the Mobile Robotics Group (MRG), explored the transition from manual container orchestration to a configuration-driven deployment model for infrastructure-led robotics.

Supported by InnovateUK, the study evaluated how abstraction of system complexity affects the deployment of large-scale robotic infrastructure in a high-density warehouse environment. The results show that a configuration-driven approach can significantly reduce setup time, improve consistency, and reduce the likelihood of configuration errors when compared with manual orchestration workflows.

The work also demonstrates the successful deployment and testing of Robotic Inversion infrastructure in a real-world logistics environment, using a dense camera network, multiple mobile robot platforms, and a high-performance central compute system.

---

## The Challenge: Robotic Inversion at Enterprise Scale

Robotic Inversion (RI) is a paradigm in autonomous robotics that offloads sensing and computation from robots to supporting infrastructure — specifically, a dense network of CCTV-style camera modules and a high-performance central server. 

This approach reduces the cost and complexity of individual robotic units. Instead of each robot carrying all sensing and computation onboard, perception, localisation, path planning, and parts of control can be supported by infrastructure installed in the environment.

However, this shifts complexity to the orchestration layer. The larger the environment becomes, the more cameras, robots, services, topics, network addresses, and runtime dependencies need to be configured correctly.

![Luke and Pratik](images/research/202604-omniscient/luke_pratik.jpg)

*Figure 1: MRG Engineers Pratik and [Luke](https://ori-mrg.github.io/people/luke-robinson/) during configuration of the Robotic Inversion system at Gompels Healthcare*

A primary bottleneck is the mental load placed on engineers to ensure system-wide coherence during the initial provisioning phase. The problem is not only the number of services, but the number of places where small inconsistencies can be introduced. Relying on basic templating or manual scripting increases the likelihood of such inconsistencies, which can lead to extended debugging cycles and system downtime. For researchers and engineers, this complexity directly limits the rate at which new autonomous capabilities can be reliably deployed and validated in high-density operational environments.

---

## Solution Overview: Configuration-Driven Orchestration

The solution evaluated in this study was a configuration-driven orchestration workflow. As part of this work, Omniscient Innovations Ltd provided access to Omni CLM — Configuration Lifecycle Management — a toolset for managing structured configuration data in complex engineering systems.

Omni CLM is built on the concept of a semantic model: a structured representation of system assets, relationships, and configuration requirements that serves as a single source of truth. In this context, a semantic model provides a structured way to describe the deployment environment: cameras, robots, network addresses, service names, dependencies, and other parameters. This allows the human-facing configuration to remain compact while the underlying orchestration files are generated consistently.

One of Omni CLM's core capabilities is so-called semantic compatibility. This involves unifying the typically distinct tasks of schema evolution and data migration using a single source of truth: the semantic model. This model defines how the system capability has evolved over time, and uses this to both infer the appropriate schema as well as bidirectionally migrate data back and forth to whatever schema version a particular implementation requires. Legacy data remains compatible with updated software, greatly reducing the toil associated with rapidly evolving system architectures.

In this study, these ideas were evaluated as part of a broader configuration-driven orchestration workflow for scaling Robotic Inversion infrastructure in a real warehouse environment.

---

## Study Description: Manual vs. Configuration-Driven Deployment

We compared two operational workflows for managing the complexity of the robotic infrastructure, demonstrating them in a real-world use case involving a 600 m2 section of a warehouse at Gompels Healthcare, 25 cameras, and a mix of AgileX and Clearpath robots.

The baseline approach consisted of authoring and maintaining Docker Compose files using a templated workflow. This represents a common approach for multi-service robotics deployments, where engineers duplicate, adapt, and maintain service definitions as the number of robots and sensors increases. This method is flexible and familiar, but it requires engineers to keep track of many repeated fields across a growing deployment file. Small mistakes — such as a mismatched IP address, an inconsistent topic name, or a missed service dependency — can be difficult to identify during live integration.

The second approach used a high-level specification, informed by Omni CLM concepts, to define the site’s physical assets, including names, IP addresses, ports, camera identifiers, and robot information. An internal library then automatically generated the underlying orchestration layer from this compact source of truth.

First, engineers were tasked with manually provisioning various setups working from a set of basic requirements, as well as reconfiguration tasks representing real-world maintenance, such as adding a new camera or updating an existing robot’s configuration. Engineers then performed the same tasks using the configuration-driven approach. In both cases, the time to reach a working installation, as well as the number of errors and the time spent debugging them, were tracked.

---

## Results Summary: Order-of-Magnitude Improvements in Error Rates and Deployment Times

Our analysis showed that while both approaches scale linearly with service count, the surface area for human error in the manual baseline grows significantly. As assets were added, manual orchestration files expanded from a few dozen lines to over 200× their original size. In contrast, the configuration-driven approach keeps the human-facing “source of truth” compact, regardless of deployment size.

We evaluated both methods across scaling scenarios ranging from a single robot to a full 20-camera deployment. The configuration-driven approach was consistently faster during the initial setup phase. By removing the need to manually duplicate service definitions, engineers could move from a requirement list to a running system in minutes rather than hours —  consistently 3-8x faster.

![Multirobot in warehouse](images/research/202604-omniscient/multi_robot.jpg)

*Figure 2: AgileX Tracer and Scout Mini robots operating together in the warehouse, viewed from one of the infrastructure cameras.*

To reflect realistic deployment conditions, we then introduced incremental changes such as adding rows of cameras, swapping robot platforms, and scaling the fleet. Simple modifications, such as renaming a robot or changing a single IP address, were manageable in both workflows. However, larger structural additions — for example, adding a new corridor of cameras or expanding the deployment to support additional robots — required extensive manual edits to the baseline system, whereas the configuration-driven workflow required near-constant effort to add infrastructure.

The most significant differences emerged during debugging. In manual deployments, we observed frequent “silent bugs”—such as mismatched topic names or incorrect IP assignments—that required substantial time to diagnose since they cause the system to appear to launch successfully while still failing at runtime. Using a unified configuration reduced these issues in the tested scenarios by ensuring that updates (e.g. to robot identities or network parameters) were applied consistently across all services.

{{< youtube iqpjuLGTiwA >}}

*Figure 3: TurtleBot platform operating in the warehouse test environment*

Overall, the study indicates that configuration-driven orchestration can substantially reduce setup time and improve consistency during deployment. In this work, tools and methodologies provided by Omniscient supported the development and evaluation of this approach.

---

## Conclusion

This study highlights that the successful deployment of infrastructure-led autonomous robotics at enterprise scale depends critically on effective configuration management practices.

Through this work, MRG demonstrated the ability to deploy and evolve complex robotic systems in a real-world logistics environment, while also evaluating emerging tools and methodologies that may support future scalability.

The results suggest that continued development of configuration management approaches — including Omni CLM's semantic modelling — will play an important role in enabling reliable, large-scale autonomous systems.

---

## Acknowledgements

We would like to thank our collaborators for their vital contributions to this research:

- Omniscient Innovations Ltd for their collaboration, tooling, and support in exploring configuration-driven orchestration methods.
- Gompels Healthcare for providing the warehouse facility, operational context, and expertise required to test the system in a realistic logistics environment.
- **InnovateUK:** For the funding and support that made this innovation project possible.
