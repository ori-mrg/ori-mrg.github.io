---
title: "Multi-Robot Planning and Control from CCTV Camera Networks"
meta_title: "Multi-Robot Planning and Control from CCTV Camera Networks"
description: "this is meta description"
date: 2026-07-11T05:00:00Z
image: "images/research/20260711-warehouse_inversion/two_robots_planning.jpg"
categories: ["deployment", "site-driven robotics"]
author: "Daniele De Martini"
tags: ["Gompels Healthcare"]
draft: false
---


In many robotics applications, we assume that every robot must carry its own suite of sensors and powerful onboard computers to understand where it is and how to move. Our latest research, ["Multi-Robot Planning and Control from CCTV Camera Networks in a Real Warehouse"](https://arxiv.org/abs/2606.06762), explores a different approach.

We moved the perception, planning, and control off-board, using a network of cameras and an edge server to coordinate a fleet of robots that carry no navigation hardware of their own.

We built and deployed a system that allows four different robots to navigate a live warehouse using only a camera network and off-board computing.
To our knowledge, this is the first field demonstration of multi-robot planning and coordination in a warehouse where the robots are "blind"—carrying no task-specific sensors—and rely entirely on an uncalibrated camera network and external compute.

![Big statement](images/research/20260711-warehouse_inversion/statement.jpeg)</br>
*Figure: If we can embed sensing and smarts in the environment, why should we always try to use only onboard resources?*

---

## Moving intelligence to the infrastructure

The central idea of this work is to make the environment intelligent rather than the robots. By using a network of cameras installed throughout a facility, we can create a shared view of the entire operation. This allows for the use of heterogeneous fleets where different robot platforms—each with different sizes and motion characteristics—can be coordinated from a single, centralized system.

In our deployment, we used thirty cameras to cover a mid-sized warehouse featuring six 27-metre-long aisles. The fleet consisted of four distinct robots: a Clearpath TurtleBot 2, a Clearpath Jackal, an AgileX Scout Mini, and an AgileX Ranger Mini 3.0. Because the intelligence is handled by an edge server, these robots did not need to run their own complex navigation stacks; they simply received motion commands over Wi-Fi based on what the cameras observed.
Navigating without complex calibration

One of the primary challenges with using camera networks for robotics is that they are rarely set up as precise motion-capture systems. Standard cameras have significant perspective distortion, and their views often overlap in irregular ways. Traditional methods would require a painstaking process of calibrating every camera to a single global 3D coordinate system, which is difficult to maintain in a large, operational space.

We addressed this by using a "pixel-wise topological camera graph." Instead of a 3D map, the system learns a model of how robots appear and move within each specific camera view and how they transition between them. By training on data gathered directly in the environment, the system understands how a robot’s size and speed change across the image as it moves closer to or further from a lens. This allows for accurate path planning and control without the need for traditional extrinsic calibration.

We are incredibly grateful to Gomples Healthcare for allowing us to conduct these experiments in their premises; their support was instrumental in bringing this work from simulation to a real-world warehouse environment.

![Robots in warehouse](images/research/20260711-warehouse_inversion/robots.jpg)</br>
*Figure: The four robots used in the warehouse demonstration. Each robot is controlled by the same centralized system, which uses a network of cameras to perceive and plan their motion.*

---

## Coordinated planning in narrow spaces

Managing a fleet in a warehouse is particularly difficult because of the narrow aisles, which limit where robots can pass or turn. Our system uses a hierarchical planner to solve this. At the high level, it determines which sequence of cameras a robot should follow. At the local level, it generates precise trajectories within each camera's field of view, ensuring that robots avoid collisions and manage deadlocks in tight spaces.

During our testing, the system only needed to process the cameras that were actually relevant to active missions. On average, only 3.5 cameras out of the 30-camera network were active at any given time. This demonstrates an efficient way to scale perception across a large facility without requiring massive, simultaneous compute for every single camera feed.

---

## Results from the field

To validate the system, we operated the four-robot fleet continuously for over 45 minutes in the warehouse. During this time, the robots travelled a combined 1.3 km and successfully completed 76 point-to-point missions.

{{< youtube CtrrU9UIB7E >}}

*Live operation of four robots in the warehouse*

We compared the system's performance against human teleoperation. In controlled runs, the autonomous system performed within 5.1% of a human driver’s efficiency. While a human is capable of driving a single robot effectively, our infrastructure-led approach allows a single server to coordinate multiple robots simultaneously—a task that quickly becomes overwhelming for a single human operator.

---

## Looking ahead

While this field demonstration proves the viability of infrastructure-based coordination, there is much more to explore. Beyond specific technical improvements—such as reducing idle time during planning or enhancing the robustness of our learned models—we believe the next major step is to reintegrate onboard sensing and compute.

By combining the global, shared perspective of the camera network with the high-frequency, local awareness of onboard sensors, we can create even more resilient and capable multi-robot systems. This research marks a significant milestone in showing how environments can actively participate in the autonomy of the robots within them.

For a deep dive into the methodology, experimental data, and results, the full paper is available here: [Multi-Robot Planning and Control from CCTV Camera Networks in a Real Warehouse](https://arxiv.org/abs/2606.06762).
