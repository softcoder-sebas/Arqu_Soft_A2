"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Moon,
  Sun,
  ExternalLink,
  Play,
  Code,
  Database,
  Palette,
  GitBranch,
  Monitor,
  CheckCircle,
  Calendar,
  Users,
  Lightbulb,
  Rocket,
} from "lucide-react"

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  // Added state for active filters and tooltips
  const [activeStatusFilter, setActiveStatusFilter] = useState("all")
  const [activeMemberFilter, setActiveMemberFilter] = useState("all")
  const [showTooltip, setShowTooltip] = useState("")

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  // Added tooltip component for technical terms
  const Tooltip = ({ children, content, id }) => (
    <div className="relative inline-block">
      <span
        className="cursor-help border-b border-dotted border-blue-500 dark:border-blue-400"
        onMouseEnter={() => setShowTooltip(id)}
        onMouseLeave={() => setShowTooltip("")}
      >
        {children}
      </span>
      {showTooltip === id && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg shadow-lg z-50 whitespace-nowrap max-w-xs">
          <div className="text-center">{content}</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
        </div>
      )}
    </div>
  )

  // Added scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".scroll-reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [isLoading])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Cargando ERP Showcase...</h2>
          <div className="mt-4 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Rocket className="h-4 w-4 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">ERP Minoristas</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#presentacion"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                Presentación
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#entregas"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                Entregas
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#cronograma"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                Cronograma
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#roles"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                Roles
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#tecnologias"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                Tecnologías
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="ghost" size="sm" onClick={() => setIsDarkMode(!isDarkMode)} className="p-2">
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#presentacion"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Presentación
              </a>
              <a
                href="#entregas"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Entregas
              </a>
              <a
                href="#cronograma"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Cronograma
              </a>
              <a
                href="#roles"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Roles
              </a>
              <a
                href="#tecnologias"
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                Tecnologías
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section - Presentación */}
        <section id="presentacion" className="py-20 px-4 sm:px-6 lg:px-8 scroll-reveal">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              <Tooltip content="Sistema de Planificación de Recursos Empresariales" id="erp-tooltip">
                ERP
              </Tooltip>{" "}
              Integral para <span className="text-blue-600 dark:text-blue-400">Minoristas</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Desarrollo de un sistema{" "}
              <Tooltip
                content="Enterprise Resource Planning - Sistema que integra todos los procesos de negocio"
                id="erp-def"
              >
                ERP
              </Tooltip>{" "}
              completo diseñado específicamente para mercados minoristas. Una solución integral que optimiza la gestión
              de inventarios, ventas, clientes y reportes financieros, implementada con tecnologías modernas y{" "}
              <Tooltip content="Metodologías de desarrollo iterativo e incremental" id="agile-tooltip">
                metodologías ágiles
              </Tooltip>
              . El proyecto integra interfaces intuitivas con potentes capacidades de análisis de datos para transformar
              la operación de negocios minoristas.
            </p>

            {/* Technology Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              {[
                {
                  name: "C#",
                  color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
                  icon: Code,
                  tooltip: "Lenguaje de programación orientado a objetos de Microsoft",
                },
                {
                  name: "Visual Studio",
                  color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
                  icon: Monitor,
                  tooltip: "Entorno de desarrollo integrado (IDE) de Microsoft",
                },
                {
                  name: "Figma",
                  color: "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300",
                  icon: Palette,
                  tooltip: "Herramienta de diseño colaborativo para UI/UX",
                },
                {
                  name: "SQL Server",
                  color: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
                  icon: Database,
                  tooltip: "Sistema de gestión de base de datos relacional de Microsoft",
                },
                {
                  name: "GitHub",
                  color: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
                  icon: GitBranch,
                  tooltip: "Plataforma de desarrollo colaborativo con control de versiones Git",
                },
              ].map((tech, index) => {
                const IconComponent = tech.icon
                return (
                  <Tooltip key={tech.name} content={tech.tooltip} id={`tech-${index}`}>
                    <div
                      className={`${tech.color} px-6 py-3 rounded-lg flex items-center gap-2 hover:scale-110 hover:shadow-lg transition-all duration-200 cursor-pointer animate-fade-in group`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <IconComponent className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" />
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  </Tooltip>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transition-all duration-200 hover:scale-105"
                onClick={() => setShowModal(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                Ver Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:shadow-lg transition-all duration-200 hover:scale-105 bg-transparent"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Repositorio
              </Button>
            </div>
          </div>
        </section>

        <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 scroll-reveal">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Asignación de Roles</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Gestión de tareas del equipo con seguimiento de progreso y filtros interactivos
            </p>

            {/* Overall progress bar and team stats */}
            <div className="mb-8">
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Progreso General del Proyecto
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">68% completado - 15 de 22 tareas finalizadas</p>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                        <span>Progreso</span>
                        <span>68%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: "68%" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">15</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Completadas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">En Progreso</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">3</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Pendientes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">5</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Miembros</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced filter controls with active states */}
            <div className="mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filtros:</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {["all", "completed", "in-progress", "pending"].map((status) => (
                        <Button
                          key={status}
                          variant={activeStatusFilter === status ? "default" : "outline"}
                          size="sm"
                          onClick={() => setActiveStatusFilter(status)}
                          className={`transition-all duration-200 ${
                            activeStatusFilter === status
                              ? "bg-blue-600 text-white hover:bg-blue-700"
                              : "hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          }`}
                        >
                          {status === "all"
                            ? "Todos los Estados"
                            : status === "completed"
                              ? "Completadas"
                              : status === "in-progress"
                                ? "En Progreso"
                                : "Pendientes"}
                        </Button>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {["all", "ana", "carlos", "maria"].map((member) => (
                        <Button
                          key={member}
                          variant={activeMemberFilter === member ? "default" : "outline"}
                          size="sm"
                          onClick={() => setActiveMemberFilter(member)}
                          className={`transition-all duration-200 ${
                            activeMemberFilter === member
                              ? "bg-purple-600 text-white hover:bg-purple-700"
                              : "hover:bg-purple-50 dark:hover:bg-purple-900/20"
                          }`}
                        >
                          {member === "all"
                            ? "Todos los Miembros"
                            : member === "ana"
                              ? "Ana García"
                              : member === "carlos"
                                ? "Carlos López"
                                : "María Rodríguez"}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Responsive task table */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Tarea
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Responsable
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Fecha Límite
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Progreso
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {[
                      {
                        task: "Análisis de Requisitos Funcionales",
                        responsible: "Ana García",
                        avatar: "AG",
                        date: "15 Ene 2024",
                        status: "completed",
                        progress: 100,
                        priority: "high",
                      },
                      {
                        task: "Diseño de Base de Datos",
                        responsible: "Carlos López",
                        avatar: "CL",
                        date: "28 Ene 2024",
                        status: "completed",
                        progress: 100,
                        priority: "high",
                      },
                      {
                        task: "Implementación API Inventarios",
                        responsible: "María Rodríguez",
                        avatar: "MR",
                        date: "15 Feb 2024",
                        status: "in-progress",
                        progress: 75,
                        priority: "high",
                      },
                      {
                        task: "Desarrollo Módulo Ventas",
                        responsible: "Luis Martín",
                        avatar: "LM",
                        date: "28 Feb 2024",
                        status: "in-progress",
                        progress: 60,
                        priority: "medium",
                      },
                      {
                        task: "Testing Unitario Backend",
                        responsible: "Ana García",
                        avatar: "AG",
                        date: "10 Mar 2024",
                        status: "in-progress",
                        progress: 40,
                        priority: "medium",
                      },
                      {
                        task: "Diseño UI Dashboard Principal",
                        responsible: "Sofia Chen",
                        avatar: "SC",
                        date: "20 Mar 2024",
                        status: "pending",
                        progress: 0,
                        priority: "medium",
                      },
                      {
                        task: "Implementación Frontend Inventarios",
                        responsible: "Carlos López",
                        avatar: "CL",
                        date: "05 Abr 2024",
                        status: "pending",
                        progress: 0,
                        priority: "low",
                      },
                      {
                        task: "Integración Sistema de Reportes",
                        responsible: "María Rodríguez",
                        avatar: "MR",
                        date: "15 Abr 2024",
                        status: "pending",
                        progress: 0,
                        priority: "low",
                      },
                    ].map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div
                              className={`w-2 h-8 rounded-full mr-3 ${
                                item.priority === "high"
                                  ? "bg-red-400"
                                  : item.priority === "medium"
                                    ? "bg-yellow-400"
                                    : "bg-green-400"
                              }`}
                            ></div>
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">{item.task}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                Prioridad{" "}
                                {item.priority === "high" ? "Alta" : item.priority === "medium" ? "Media" : "Baja"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8">
                              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-medium">
                                {item.avatar}
                              </div>
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {item.responsible}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="h-4 w-4 mr-2" />
                            {item.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge
                            className={
                              item.status === "completed"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                : item.status === "in-progress"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                            }
                          >
                            {item.status === "completed"
                              ? "Completada"
                              : item.status === "in-progress"
                                ? "En Progreso"
                                : "Pendiente"}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-3">
                              <div
                                className={`h-2 rounded-full transition-all duration-500 ${
                                  item.progress === 100
                                    ? "bg-green-500"
                                    : item.progress > 0
                                      ? "bg-blue-500"
                                      : "bg-gray-300 dark:bg-gray-600"
                                }`}
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                              {item.progress}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Team performance summary */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Ana García",
                  role: "Analista de Sistemas",
                  avatar: "AG",
                  tasksCompleted: 4,
                  tasksInProgress: 1,
                  efficiency: 92,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Carlos López",
                  role: "Desarrollador Backend",
                  avatar: "CL",
                  tasksCompleted: 3,
                  tasksInProgress: 0,
                  efficiency: 88,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  name: "María Rodríguez",
                  role: "Desarrolladora Full Stack",
                  avatar: "MR",
                  tasksCompleted: 2,
                  tasksInProgress: 2,
                  efficiency: 85,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  name: "Luis Martín",
                  role: "Desarrollador Backend",
                  avatar: "LM",
                  tasksCompleted: 1,
                  tasksInProgress: 1,
                  efficiency: 78,
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "Sofia Chen",
                  role: "Diseñadora UI/UX",
                  avatar: "SC",
                  tasksCompleted: 0,
                  tasksInProgress: 0,
                  efficiency: 0,
                  color: "from-indigo-500 to-purple-500",
                },
              ].map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`h-12 w-12 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center text-white font-bold text-lg mr-4`}
                      >
                        {member.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Tareas Completadas</span>
                        <span className="font-medium text-green-600 dark:text-green-400">{member.tasksCompleted}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">En Progreso</span>
                        <span className="font-medium text-blue-600 dark:text-blue-400">{member.tasksInProgress}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">Eficiencia</span>
                        <span className="font-medium text-purple-600 dark:text-purple-400">{member.efficiency}%</span>
                      </div>

                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                          <span>Rendimiento</span>
                          <span>{member.efficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${member.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${member.efficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced modal with better animations and content */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto transform animate-scale-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  Demo del Sistema ERP
                </h3>
                <Button
                  variant="ghost"
                  onClick={() => setShowModal(false)}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center mb-4 border-2 border-dashed border-blue-300 dark:border-blue-700">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Video demo próximamente disponible</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Funcionalidades principales del sistema
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  El demo interactivo mostrará las funcionalidades principales del sistema ERP, incluyendo gestión de
                  inventarios, procesamiento de ventas y generación de reportes.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Gestión de Inventarios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Procesamiento de Ventas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Reportes Financieros</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Dashboard Analítico</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Solicitar Demo Personalizado
                </Button>
                <Button variant="outline" onClick={() => setShowModal(false)}>
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Rocket className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold">ERP Minoristas</h3>
              </div>
              <p className="text-gray-400">Sistema integral para la gestión de mercados minoristas.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                >
                  Repositorio GitHub
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                >
                  Documentación
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                >
                  Demo en Vivo
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2">
                <p className="text-gray-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  equipo@erpminoristas.com
                </p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ERP Minoristas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Page
