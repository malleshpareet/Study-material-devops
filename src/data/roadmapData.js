export const roadmapData = [
    { id: 1, stage: 1, title: "Introduction", level: "Core", time: "1 Day", icon: "BookOpen", description: "Philosophy and cultural shift of DevOps.", tools: ["Culture", "Mindset"], curriculum: [{ title: "The DevOps Culture", content: "DevOps is the union of people and processes." }] },
    { id: 2, stage: 2, title: "Target Audience", level: "Core", time: "1 Day", icon: "Users", description: "Who needs DevOps skills in 2026?", tools: ["Career", "Roles"], curriculum: [{ title: "Roles in DevOps", content: "Identifying your path in the ecosystem." }] },
    { id: 3, stage: 3, title: "Resources", level: "Core", time: "1 Day", icon: "Library", description: "Curated list of documentation and courses.", tools: ["Docs", "Videos"], curriculum: [{ title: "Global Resource List", content: "Centralized learning portal." }] },
    { id: 4, stage: 4, title: "Roadmap Overview", level: "Core", time: "1 Day", icon: "Map", description: "Navigating the 16-step journey effectively.", tools: ["Planning", "Goals"], curriculum: [{ title: "The Big Picture", content: "How to approach this technical journey." }] },
    { id: 5, stage: 5, title: "Linux Fundamentals", level: "Beginner", time: "2 Weeks", icon: "Terminal", description: "OS administration and CLI mastery.", tools: ["Bash", "SSH", "Systemd"], curriculum: [{ title: "SysAdmin Basics", content: "Mastering the Linux operating system." }] },
    { id: 6, stage: 6, title: "Networking Concepts", level: "Beginner", time: "2 Weeks", icon: "Network", description: "How systems communicate at scale.", tools: ["DNS", "OSI", "TCP/IP"], curriculum: [{ title: "Advanced Networking", content: "Protocols and traffic management." }] },
    { id: 7, stage: 7, title: "Version Control (Git)", level: "Beginner", time: "1 Week", icon: "GitBranch", description: "Master distributed version control.", tools: ["Git", "GitHub"], curriculum: [{ title: "Git Mastery", content: "Branching and collaboration workflows." }] },
    { id: 8, stage: 8, title: "Programming Languages", level: "Beginner", time: "3 Weeks", icon: "Code2", description: "Automation with Python and Go.", tools: ["Python", "Go"], curriculum: [{ title: "Scripting for Ops", content: "Writing robust automation scripts." }] },
    { id: 9, stage: 9, title: "Cloud Providers", level: "Intermediate", time: "4 Weeks", icon: "Cloud", description: "AWS, Azure, and GCP internal mechanics.", tools: ["AWS", "IAM", "VPC"], curriculum: [{ title: "Cloud Architecture", content: "Building scalable cloud infra." }] },
    { id: 10, stage: 10, title: "Containerization", level: "Intermediate", time: "2 Weeks", icon: "Box", description: "Packaging apps with Docker.", tools: ["Docker", "Registry"], curriculum: [{ title: "Container Runtime", content: "Docker internals and optimization." }] },
    { id: 11, stage: 11, title: "CI/CD Pipelines", level: "Intermediate", time: "3 Weeks", icon: "Repeat", description: "Continuous integration and delivery.", tools: ["Jenkins", "Actions"], curriculum: [{ title: "Pipeline Ops", content: "Building automated delivery systems." }] },
    { id: 12, stage: 12, title: "Container Orchestration", level: "Advanced", time: "4-6 Weeks", icon: "Ship", description: "Kubernetes cluster management.", tools: ["K8s", "Helm"], curriculum: [{ title: "K8s Mastery", content: "Managing fleet containers." }] },
    { id: 13, stage: 13, title: "Networking & Infra Services", level: "Advanced", time: "2 Weeks", icon: "Globe", description: "Load balancing, CDNs, and API Gateways.", tools: ["Nginx", "Terraform"], curriculum: [{ title: "Traffic Engineering", content: "Managing edge and internal traffic." }] },
    { id: 14, stage: 14, title: "Configuration Management", level: "Intermediate", time: "2 Weeks", icon: "Settings", description: "Server automation with Ansible.", tools: ["Ansible", "Playbooks"], curriculum: [{ title: "Agentless Config", content: "Scaling server management." }] },
    { id: 15, stage: 15, title: "Infrastructure as Code", level: "Intermediate", time: "3 Weeks", icon: "FileCode2", description: "Provisioning with Terraform.", tools: ["Terraform", "HCL"], curriculum: [{ title: "Declarative Infra", content: "Infrastructure as software." }] },
    { id: 16, stage: 16, title: "Monitoring and Logging", level: "Advanced", time: "2 Weeks", icon: "BarChart3", description: "Observability and alerting.", tools: ["ELK", "Prometheus"], curriculum: [{ title: "Total Visibility", content: "Tracking system health." }] }
];

export const toolsData = [
    { name: "Linux", category: "OS Foundations", logoUrl: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg", mandatory: true, docUrl: "https://www.kernel.org/doc/html/latest/" },
    { name: "Git", category: "Version Control", logoUrl: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", mandatory: true, docUrl: "https://git-scm.com/doc" },
    { name: "GitHub", category: "Collaboration", logoUrl: "https://www.vectorlogo.zone/logos/github/github-icon.svg", mandatory: true, docUrl: "https://docs.github.com/" },
    { name: "Python", category: "Automation", logoUrl: "https://www.vectorlogo.zone/logos/python/python-icon.svg", docUrl: "https://docs.python.org/3/" },
    { name: "Go", category: "Cloud Native", logoUrl: "https://www.vectorlogo.zone/logos/golang/golang-icon.svg", docUrl: "https://go.dev/doc/" },
    { name: "AWS", category: "Cloud", logoUrl: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg", mandatory: true, docUrl: "https://docs.aws.amazon.com/" },
    { name: "Docker", category: "Containers", logoUrl: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg", mandatory: true, docUrl: "https://docs.docker.com/" },
    { name: "Kubernetes", category: "Orchestration", logoUrl: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg", mandatory: true, docUrl: "https://kubernetes.io/docs/home/" },
    { name: "Jenkins", category: "CI/CD", logoUrl: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg", docUrl: "https://www.jenkins.io/doc/" },
    { name: "Ansible", category: "Automation", logoUrl: "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg", docUrl: "https://docs.ansible.com/" },
    { name: "Terraform", category: "IaC", logoUrl: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg", mandatory: true, docUrl: "https://developer.hashicorp.com/terraform/docs" },
    { name: "Nginx", category: "Networking", logoUrl: "https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg", docUrl: "https://nginx.org/en/docs/" },
    { name: "Prometheus", category: "Monitoring", logoUrl: "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg", docUrl: "https://prometheus.io/docs/introduction/overview/" },
    { name: "Grafana", category: "Visualization", logoUrl: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg", docUrl: "https://grafana.com/docs/" }
];

export const projectsData = [
    // --- BEGINNER PROJECTS (4) ---
    {
        id: 1, title: "Static Website on AWS S3", difficulty: "Beginner",
        description: "Deploy a highly available static website using AWS S3 and CloudFront with custom SSL.",
        tools: ["AWS S3", "CloudFront", "Route53"],
        githubUrl: "https://github.com/cloudmaniac/terraform-aws-static-website"
    },
    {
        id: 2, title: "Node.js Containerization", difficulty: "Beginner",
        description: "Master Docker by containerizing a Node.js application with environment-specific configurations.",
        tools: ["Docker", "Docker-Compose", "Node.js"],
        githubUrl: "https://github.com/dockersamples/node-bulletin-board"
    },
    {
        id: 3, title: "CI/CD with GitHub Actions", difficulty: "Beginner",
        description: "Automate your testing and linting workflow for every code push with GitHub Actions.",
        tools: ["GitHub Actions", "YAML", "Jest"],
        githubUrl: "https://github.com/actions/starter-workflows"
    },
    {
        id: 4, title: "DevOps Practical Exercises", difficulty: "Beginner",
        description: "Over 2,600+ hands-on exercises covering Linux, Jenkins, AWS, and Kubernetes.",
        tools: ["Linux", "SRE", "Interview Prep"],
        githubUrl: "https://github.com/bregman-arie/devops-exercises"
    },

    // --- INTERMEDIATE PROJECTS (4) ---
    {
        id: 5, title: "Ansible Real World Projects", difficulty: "Intermediate",
        description: "Practical implementations of Ansible for server configuration and automated deployments.",
        tools: ["Ansible", "Nginx", "Automation"],
        githubUrl: "https://github.com/techiescamp/devops-projects"
    },
    {
        id: 6, title: "Industry Standard AWS VPC", difficulty: "Intermediate",
        description: "Provision a production-grade VPC with Public/Private subnets using verified Terraform modules.",
        tools: ["Terraform", "AWS VPC", "Modules"],
        githubUrl: "https://github.com/terraform-aws-modules/terraform-aws-vpc"
    },
    {
        id: 7, title: "Java App Deployment on AWS", difficulty: "Intermediate",
        description: "Scalable Java application deployment using Auto-scaling groups, Load balancers, and CloudWatch.",
        tools: ["AWS", "Java", "Auto-scaling"],
        githubUrl: "https://github.com/techiescamp/devops-projects/tree/main/03-scalable-java-app"
    },
    {
        id: 8, title: "Prometheus Monitoring Stack", difficulty: "Intermediate",
        description: "Deploy a complete observability stack with Prometheus, Grafana, and Node Exporter.",
        tools: ["Prometheus", "Grafana", "Observability"],
        githubUrl: "https://github.com/vegasbrianc/prometheus-grafana"
    },

    // --- EXPERT PROJECTS (4) ---
    {
        id: 9, title: "Enterprise EKS Blueprints", difficulty: "Expert",
        description: "Implement a production-ready EKS cluster with managed add-ons and security groups.",
        tools: ["Kubernetes", "EKS", "Enterprise"],
        githubUrl: "https://github.com/aws-ia/terraform-aws-eks-blueprints"
    },
    {
        id: 10, title: "GitOps Application Apps", difficulty: "Expert",
        description: "Manage your Kubernetes cluster state declaratively using ArgoCD and Git repositories.",
        tools: ["ArgoCD", "Kubernetes", "GitOps"],
        githubUrl: "https://github.com/argoproj/argocd-example-apps"
    },
    {
        id: 11, title: "Advanced EKS Integration", difficulty: "Expert",
        description: "Advanced service provisioning via Terraform, Jenkins CI/CD, and ArgoCD on AWS EKS.",
        tools: ["Terraform", "Jenkins", "ArgoCD"],
        githubUrl: "https://github.com/AbdelrhmanAli123/Advanced-DevOps-Project"
    },
    {
        id: 12, title: "Full DevSecOps Pipeline", difficulty: "Expert",
        description: "End-to-end DevSecOps pipeline with security scanning, Jenkins, and Kubernetes deployment.",
        tools: ["DevSecOps", "Security", "Jenkins"],
        githubUrl: "https://github.com/AmanPathak-DevOps/End-to-End-Kubernetes-Three-Tier-DevSecOps-Project"
    }
];
