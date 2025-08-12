// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all functionality
  initPreloader()
  initNavigation()
  initThemeToggle()
  initScrollReveal()
  // initModal() // Eliminado: el modal de demo ya no es necesario
  initFilters()
  initTasksTable()
  initProgressBars()
})

// Preloader
function initPreloader() {
  const preloader = document.getElementById("preloader")

  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.style.display = "none"
      }, 300)
    }, 1000)
  })
}

// Navigation
function initNavigation() {
  const navbar = document.getElementById("navbar")
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link")

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled")
    } else {
      navbar.classList.remove("navbar-scrolled")
    }
  })

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
  })

  // Smooth scroll for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }

      // Close mobile menu
      mobileMenu.classList.add("hidden")
    })
  })
}

// Theme Toggle
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
  const html = document.documentElement;

  // Verificar el tema guardado en localStorage o la preferencia del sistema
  const savedTheme = localStorage.getItem("theme") || 
                    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  // Aplicar el tema guardado
  if (savedTheme === "dark") {
    html.classList.add("dark");
    themeToggleLightIcon.classList.remove("hidden");
    themeToggleDarkIcon.classList.add("hidden");
  } else {
    html.classList.remove("dark");
    themeToggleLightIcon.classList.add("hidden");
    themeToggleDarkIcon.classList.remove("hidden");
  }

  // Escuchar cambios en la preferencia del sistema
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        html.classList.add("dark");
        themeToggleLightIcon.classList.remove("hidden");
        themeToggleDarkIcon.classList.add("hidden");
      } else {
        html.classList.remove("dark");
        themeToggleLightIcon.classList.add("hidden");
        themeToggleDarkIcon.classList.remove("hidden");
      }
    }
  });

  // Manejar el clic en el botón de tema
  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    
    const isDark = html.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    
    // Alternar iconos
    if (isDark) {
      themeToggleLightIcon.classList.remove("hidden");
      themeToggleDarkIcon.classList.add("hidden");
    } else {
      themeToggleLightIcon.classList.add("hidden");
      themeToggleDarkIcon.classList.remove("hidden");
    }
  });
}

// Scroll Reveal Animation
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".delivery-card, .tech-card, .timeline-item")

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal", "active")
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  revealElements.forEach((element) => {
    revealObserver.observe(element)
  })
}

// Modal (Eliminado, ya no es necesario)
/*
function initModal() {
  const demoBtn = document.getElementById("demo-btn")
  const modal = document.getElementById("demo-modal")
  const closeModal = document.getElementById("close-modal")

  demoBtn.addEventListener("click", () => {
    modal.classList.remove("hidden")
    modal.classList.add("show")
    document.body.style.overflow = "hidden"
  })

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden")
    modal.classList.remove("show")
    document.body.style.overflow = "auto"
  })

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden")
      modal.classList.remove("show")
      document.body.style.overflow = "auto"
    }
  })
}
*/

// Filters
function initFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const memberFilter = document.getElementById("member-filter");

  // Filtro por estado
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach((b) => {
        b.classList.remove("active");
        b.classList.add("bg-gray-200", "dark:bg-gray-700", "text-gray-700", "dark:text-gray-300");
        b.classList.remove("bg-blue-600", "text-white");
      });

      // Add active class to clicked button
      this.classList.add("active");
      this.classList.remove("bg-gray-200", "dark:bg-gray-700", "text-gray-700", "dark:text-gray-300");
      this.classList.add("bg-blue-600", "text-white");

      // Filter tasks
      const filter = this.getAttribute("data-filter");
      filterTasks(filter, memberFilter.value);
    });
  });

  // Filtro por miembro del equipo
  if (memberFilter) {
    memberFilter.addEventListener("change", function() {
      const activeFilterBtn = document.querySelector(".filter-btn.active");
      const currentFilter = activeFilterBtn ? activeFilterBtn.getAttribute("data-filter") : "all";
      filterTasks(currentFilter, this.value);
    });
  }
}

// Tasks Table
function initTasksTable() {
  const tasks = [
    {
      task: "Evaluar ventajas y desventajas",
      responsible: "Alejandro Castro Álvarez",
      date: "11 Agos 2025",
      status: "completado",
      progress: 100,
    },
    {
      task: "Definición del problema y solución",
      responsible: "Alejandro Castro Álvarez",
      date: "11 Agos 2025",
      status: "completado",
      progress: 100,
    },
    {
      task: "Justificación y usuario final",
      responsible: "Alejandro Castro Álvarez",
      date: "11 Agos 2025",
      status: "completado",
      progress: 100,
    },
    {
      task: "Retorno de inversión",
      responsible: "Alejandro Castro Álvarez",
      date: "11 Agos 2025",
      status: "completado",
      progress: 100,
    },
    {
      task: "Requisitos funcionales (árbol)",
      responsible: "José Camilo Pérez Daza",
      date: "12 Agos 2025",
      status: "en-progreso",
      progress: 50,
    },
    {
      task: "Requisitos no funcionales",
      responsible: "José Camilo Pérez Daza",
      date: "12 Agos 2025",
      status: "en-progreso",
      progress: 50,
    },
    {
      task: "Alcances del sistema",
      responsible: "José Camilo Pérez Daza",
      date: "12 Agos 2025",
      status: "pendiente",
      progress: 50,
    },
    {
      task: "Tecnologías seleccionadas",
      responsible: "José Camilo Pérez Daza",
      date: "11 Agos 2025",
      status: "completado",
      progress: 100,
    },
    {
      task: "Creación de repositorio",
      responsible: "Sebastian Fernando Revelo Meneses",
      date: "12 Agos 2025",
      status: "en-progreso",
      progress: 75,
    },
    {
      task: "Investigación de antecedentes (APP1)",
      responsible: "Sebastian Fernando Revelo Meneses",
      date: "11 Agos 2025",
      status: "completado",
      progress: 100,
    },
    {
      task: "Investigación de antecedentes (APP2)",
      responsible: "Sebastian Fernando Revelo Meneses",
      date: "11 Agos 2025",
      status: "completado",
      progress: 100,
    },
    {
      task: "Investigación de antecedentes (APP3)",
      responsible: "Sebastian Fernando Revelo Meneses",
      date: "11 Agos 2025",
      status: "completado",
      progress: 100,
    },
    {
      task: "Investigación de antecedentes (APP4)",
      responsible: "Sebastian Fernando Revelo Meneses",
      date: "11 Agos 2025",
      status: "completado",
      progress: 100,
    },
    {
      task: "Diseño de Infografía",
      responsible: "María Camila Sosa Cediel",
      date: "11 Agos 2025",
      status: "pendiente",
      progress: 15,
    },
    {
      task: "Preparación de Presentación (Inglés)",
      responsible: "María Camila Sosa Cediel",
      date: "11 Agos 2025",
      status: "pendiente",
      progress: 30,
    },
  ]

  window.allTasks = tasks
  renderTasks(tasks)
}

function renderTasks(tasks) {
  const tbody = document.getElementById("tasks-table-body")
  tbody.innerHTML = ""

  tasks.forEach((task) => {
    const statusColors = {
      completado: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "en-progreso": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      pendiente: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    }

    const statusText = {
      completado: "Completado",
      "en-progreso": "En Progreso",
      pendiente: "Pendiente",
    }

    const progressColors = {
      completado: "bg-green-500",
      "en-progreso": "bg-blue-500",
      pendiente: "bg-gray-400",
    }

    const row = document.createElement("tr")
    row.className = "hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
    row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-gray-900 dark:text-white">${task.task}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900 dark:text-white">${task.responsible}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-500 dark:text-gray-400">${task.date}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[task.status]}">
                    ${statusText[task.status]}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-3">
                        <div class="${progressColors[task.status]} h-2 rounded-full transition-all duration-1000" style="width: ${task.progress}%"></div>
                    </div>
                    <span class="text-sm font-medium text-gray-900 dark:text-white">${task.progress}%</span>
                </div>
            </td>
        `
    tbody.appendChild(row)
  })
}

function filterTasks(statusFilter, memberFilter = "all") {
  let filteredTasks = window.allTasks;
  
  // Aplicar filtro por estado
  if (statusFilter !== "all") {
    filteredTasks = filteredTasks.filter((task) => task.status === statusFilter);
  }
  
  // Aplicar filtro por miembro
  if (memberFilter !== "all") {
    filteredTasks = filteredTasks.filter((task) => task.responsible === memberFilter);
  }

  renderTasks(filteredTasks);
}

// Progress Bars Animation
function initProgressBars() {
  const progressBars = document.querySelectorAll('[style*="width:"]')

  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target
          const width = bar.style.width
          bar.style.width = "0%"
          setTimeout(() => {
            bar.style.width = width
          }, 100)
        }
      })
    },
    {
      threshold: 0.5,
    },
  )

  progressBars.forEach((bar) => {
    progressObserver.observe(bar)
  })
}

// Utility Functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Smooth scroll polyfill for older browsers
if (!("scrollBehavior" in document.documentElement.style)) {
  const smoothScrollPolyfill = (target, duration = 800) => {
    const targetPosition = target.offsetTop - 80
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime = null

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const run = ease(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease(t, b, c, d) {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t + b
      t--
      return (-c / 2) * (t * (t - 2) - 1) + b
    }

    requestAnimationFrame(animation)
  }

  // Override smooth scroll for older browsers
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        smoothScrollPolyfill(target)
      }
    })
  })
}
