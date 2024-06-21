def calcular_tasa_retencion(clientes_inicio, nuevos_clientes, clientes_final):
    """
    Calcula la tasa de retención de clientes.

    Args:
        clientes_inicio (int): Número de clientes al inicio del período.
        nuevos_clientes (int): Número de nuevos clientes durante el período.
        clientes_final (int): Número de clientes al final del período.

    Returns:
        float: Tasa de retención de clientes en porcentaje.
    """
    if clientes_inicio == 0:
        return 0  # Evita división por cero

    tasa_retencion = ((clientes_final - nuevos_clientes) / clientes_inicio)*100
    return tasa_retencion

# Ejemplo de uso
clientes_inicio = 5000
nuevos_clientes = 1200
clientes_final = 5200

tasa_retencion = calcular_tasa_retencion(clientes_inicio, nuevos_clientes, clientes_final)
print(f"La tasa de retención de clientes es: {tasa_retencion:.2f}")