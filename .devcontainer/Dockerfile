FROM ubuntu:latest

RUN apt-get update && apt-get install -y xz-utils curl
RUN mkdir /opt/pkgs

# Node
ADD https://nodejs.org/dist/v14.15.1/node-v14.15.1-linux-x64.tar.xz /opt/pkgs/node.tar.xz
RUN tar xvf /opt/pkgs/node.tar.xz -C /opt/pkgs && rm /opt/pkgs/node.tar.xz
ENV PATH="/opt/pkgs/node-v14.15.1-linux-x64/bin:${PATH}"

# Go
ADD https://golang.org/dl/go1.15.5.linux-amd64.tar.gz /opt/pkgs/go.tar.gz
RUN tar xvf /opt/pkgs/go.tar.gz -C /opt/pkgs && rm /opt/pkgs/go.tar.gz
ENV PATH="/opt/pkgs/go/bin:${PATH}"

# Rust
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="~/.cargo/bin:${PATH}"

# Java
ADD "https://github.com/AdoptOpenJDK/openjdk11-binaries/releases/download/jdk-11.0.9.1+1/OpenJDK11U-jdk_x64_linux_hotspot_11.0.9.1_1.tar.gz" /opt/pkgs/java.tar.gz
RUN tar xvf /opt/pkgs/java.tar.gz -C /opt/pkgs && rm /opt/pkgs/java.tar.gz
ENV PATH="/opt/pkgs/jdk-11.0.9.1+1/bin:${PATH}" \
    JAVA_HOME="/opt/pkgs/jdk-11.0.9.1+1"
