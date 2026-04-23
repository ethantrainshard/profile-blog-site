---
title: "First Things First: Setting Up Home Kubernetes Cluster"
category: tech
tags: [tech, journey, kubernetes]
excerpt: "First thing in order, we need to set up our home Kubernetes cluster."
layout: post/post
demo_url: ""
github_url: ""
---

Welcome to this first tech deep-dive! Before we can start self-hosting cool services or playing with container orchestration, we need a platform to run everything on. That's where Kubernetes comes in. In this post, I'll walk you through setting up a home Kubernetes cluster using Raspberry Pis and k3s — a lightweight Kubernetes distribution designed for resource-constrained environments.

## What is Kubernetes?

Kubernetes (often shortened to K8s) is an open-source platform that automates deploying, scaling, and managing containerized applications. Think of it as a conductor for your servers — instead of manually setting up each service, you tell Kubernetes what you want (e.g., "run 3 copies of my app") and it handles the rest: deploying, monitoring, restarting failed instances, and scaling up or down.

For home users, **k3s** is the way to go. It's a fully compliant, lightweight Kubernetes distribution built by Rancher specifically for edge computing, IoT, and single-node deployments. It uses significantly less memory and CPU than standard Kubernetes, making it perfect for Raspberry Pi hardware.

## Why Set Up a Home Cluster?

There are plenty of reasons to invest time in a home Kubernetes cluster:

- **Learn Kubernetes cheaply** — Cloud Kubernetes clusters can cost hundreds per month. Raspberry Pis cost a fraction of that and give you the same hands-on experience.
- **Self-host your services** — Run your own media server, ad blocker, home automation hub, or personal website without relying on third-party providers.
- **Privacy control** — All your data stays on your own hardware. No cloud vendor lock-in, no unexpected data sharing.
- **Career skills** — Real Kubernetes experience is one of the most in-demand DevOps skills. A home cluster looks great on a resume and gives you practical knowledge you can discuss in interviews.

## Prerequisites

1. **Raspberry Pi**: Ensure you have at least two Raspberry Pis. OS to be used will be Ubuntu Server.

## Steps

Reference: [k3s Quick Start Guide](https://docs.k3s.io/quick-start)

1. SSH into the first Raspberry Pi and install k3s on it. Use the command:

    ```bash
    curl -sfL https://get.k3s.io | sh -
    ```

2. After k3s is installed, you can check the status of the cluster with `kubectl get nodes`. If response from the command shows that master node is ready, that is good.

3. Before you exit the Master node SSH, read the following file: `cat /var/lib/rancher/k3s/server/node-token`. You will need to have the token to connect the other nodes to the Master node.

4. Exit the Master node, and SSH into another Raspberry Pi. Install k3s on it as well. Use the command:

    ```bash
    curl -sfL https://get.k3s.io | K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken sh -
    ```

5. After installing k3s into all the Raspberry Pis, return to the Master node. You can check the status of the cluster with `kubectl get nodes`. If response from the command shows that all the nodes are ready, that is good.

6. Now that the nodes are running, you may want to copy the kubeconfig file from the Master node, to your local device. This will allow you to deploy applications from your local machine onto the Kubernetes cluster.

    Copy the kubeconfig file from the Master node from `/etc/rancher/k3s/k3s.yaml`. Create if the file is not there, a config file in the `~/.kube/` directory, and paste the content from the kubeconfig file into it. Change the server address in the kubeconfig file to match the IP address of the Master node. You can verify that the kubeconfig file has been copied correctly by running `kubectl get nodes`.

7. Now you can deploy applications to your Kubernetes cluster using the `kubectl` command.

---

*Stay tuned for my next post where I will introduce a VPN that you can self host and connect even when you are not at home*
