---
title: "Entendiendo las Plataformas Internas de Desarrollo"
date: 2024-01-15
author: "Hector Luciano"
tags: ["IDP", "Ingeniería de Plataformas", "DevOps", "Arquitectura en la Nube"]
excerpt: "Las Plataformas Internas de Desarrollo son entornos centralizados que estandarizan los procesos de desarrollo, operaciones e implementación. Esto es lo que todo arquitecto necesita saber."
pillar: "cloud"
---

Las Plataformas Internas de Desarrollo (IDP) son entornos centralizados que estandarizan los procesos de desarrollo, operaciones e implementación dentro de una organización. Su objetivo es simplificar los flujos de trabajo y mejorar la productividad al proporcionar un conjunto coherente de herramientas y gobernanza.

La mayoría de las empresas que han implementado DevOps ahora necesitan implementar algún tipo de IDP. Este IDP puede tomar la forma de herramientas de CI/CD sobrecargadas como Jenkins, GitHub, soluciones desarrolladas internamente y mucho más. Sin embargo, está claro que necesitamos algo mejor — Jenkins debería ser únicamente tu máquina de CI/CD y nada más. GitHub es excelente para almacenar código fuente, ejecutar flujos de trabajo y colaborar de forma distribuida, pero no es tu catálogo de servicios.

## 1. ¿Qué es un IDP?

Exploremos lo que algunos líderes de la industria describen como un IDP.

**Cloud Native Computing Foundation:** Una plataforma interna de desarrollo (IDP) es un sistema personalizado creado internamente o por un tercero para mejorar la eficiencia de los equipos de Dev y Ops de una organización. Los IDP proporcionan una interfaz central donde los desarrolladores pueden acceder a todas las herramientas y servicios que necesitan para codificar, construir, probar e implementar aplicaciones. Su objetivo es eliminar la fricción durante la implementación mediante la estandarización de herramientas y mejores prácticas. En su núcleo, los IDP permiten a los ingenieros construir, probar, integrar e implementar aplicaciones de forma más rápida y con mayor calidad.

**Humanitec:** Una Plataforma Interna de Desarrollo (IDP) es la suma de toda la tecnología y herramientas que un equipo de ingeniería de plataformas une para trazar caminos óptimos para los desarrolladores. Los IDP reducen la carga cognitiva en toda la organización de ingeniería y habilitan el autoservicio del desarrollador, sin abstraer el contexto de los desarrolladores ni hacer que la tecnología subyacente sea inaccesible. Los IDP bien diseñados siguen un enfoque de Plataforma como Producto.

**Microsoft:** Una plataforma interna de desarrollo se centra en las prácticas de desarrollo internas de una empresa. Defines un conjunto de rutas de desarrollo recomendadas y soportadas hacia producción y progresivamente "pavimentas" un camino a través de ellas con una plataforma interna. Los caminos pavimentados dentro de una plataforma interna de desarrollo tienen objetivos similares a los senderos del mundo real — a medida que más personas los usan, se pavimentan para mejorar la seguridad mientras se mantiene la velocidad y el rendimiento.

**Cortex.io:** Un Portal Interno de Desarrollo (IDP) es el sistema de registro de ingeniería para rastrear, mejorar y construir software de alta calidad. Desde servicios y APIs hasta clústeres de Kubernetes y pipelines de datos — los IDP abstraen las complejidades de garantizar la seguridad, madurez, preparación para producción y más del software.

## 2. ¿Qué Significa Realmente?

**Hector Luciano:** Una Plataforma Interna de Desarrollo es un Producto de autoservicio compuesto por un conjunto de Herramientas y Capacidades para empoderar a los desarrolladores a ser autosuficientes y entregar su software de manera eficiente, mientras se aplican los estándares de la organización de forma sencilla.

## ¿Qué Problema Resuelve el IDP?

**Perspectiva del Ingeniero:**
- Reducir la carga cognitiva mientras se mejora la productividad
- Aumentar la calidad del software y la observabilidad
- Autoservicio: déjame construir a mi velocidad y colaborar con otros

**Perspectiva del Negocio:**
- Acelerar el tiempo de salida al mercado en un entorno cada vez más competitivo
- Automatización y aplicación de Gobernanza y Política de Seguridad
- Catálogo de Recursos y propiedad

## 3. ¿Cómo Llegamos Aquí?

La evolución de las prácticas de desarrollo que llevó al surgimiento de los IDP refleja la historia más amplia de DevOps: desde las implementaciones manuales y las aplicaciones monolíticas, pasando por la contenerización y los microservicios, hasta la necesidad de experiencias de desarrollo coordinadas y estandarizadas a escala.

## IDP vs. Herramientas Tradicionales

**Jenkins:** Jenkins sobresale como una máquina de CI/CD pero no debería sobrecargarse con responsabilidades adicionales. No es un catálogo de servicios ni un actualizador de operaciones.

**GitHub:** Si bien GitHub es excelente para la gestión del código fuente y la colaboración, no es un catálogo de servicios completo. Carece de características como la monitorización de servicios y las actualizaciones operacionales.

## 4. ¿Cómo Ayuda el IDP a Reducir la Carga Cognitiva?

Los IDP simplifican la toma de decisiones para los desarrolladores. Al proporcionar un conjunto consistente de herramientas y prácticas, reducen la carga cognitiva, permitiendo que los equipos se centren en construir software de calidad en lugar de configurar herramientas y procesos.

## ¿Por Qué Necesitamos los IDP?

**Complejidad de DevOps:** A medida que las empresas adoptan prácticas de DevOps, el panorama de herramientas se fragmenta. Las herramientas de CI/CD como Jenkins, GitLab o GitHub cumplen propósitos específicos pero carecen de cohesión.

**Más Allá de las Soluciones Superficiales:** Los IDP van más allá de las soluciones superficiales. En lugar de aplicar "parches cosméticos" a las herramientas existentes, ofrecen un enfoque holístico para la entrega de software.

## 5. ¿Cuáles son los Pros y Contras de un IDP?

### Pros:
- Flujos de trabajo optimizados
- Colaboración mejorada
- Reducción de la proliferación de herramientas
- Gobernanza mejorada

### Contras:
- Desafíos de implementación
- Adopción entre equipos
- Equilibrar la personalización y la estandarización

## 6. ¿Es Backstage.io un IDP?

Backstage.io, un proyecto de código abierto de Spotify, aspira a ser un IDP. Centraliza servicios, documentación y flujos de trabajo, convirtiéndolo en una solución potencial para gestionar todo el ciclo de vida del software.

En resumen, los IDP empoderan a las organizaciones para ir más allá de las herramientas fragmentadas, fomentando la colaboración, la eficiencia y una mejor entrega de software. 🚀
