import React from "react";
import { render,screen , fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ListaCompras from "../src/components/ListaCompras/ListaCompras";

describe('Verifica components', () => {
    test('renders the heading', () => {
      render(<ListaCompras />);
      const headingElement = screen.getByText(/Olá pipeline/i);
      expect(headingElement).toBeInTheDocument();
    });
  
    test('adiciona um item da lista', () => {
      render(<ListaCompras />);
      
      const inputElement = screen.getByPlaceholderText(/adicione um item/i);
      const addButton = screen.getByText(/adicionar/i);
  
      fireEvent.change(inputElement, { target: { value: 'Bananas' } });
      fireEvent.click(addButton);
  
      const listItem = screen.getByText(/bananas/i);
      expect(listItem).toBeInTheDocument();
    });
  
    test('remove um item da lisra', () => {
      render(<ListaCompras />);
  
      const inputElement = screen.getByPlaceholderText(/adicione um item/i);
      const addButton = screen.getByText(/adicionar/i);
  
      fireEvent.change(inputElement, { target: { value: 'Bananas' } });
      fireEvent.click(addButton);
  
      const removeButton = screen.getByText(/remover/i);
      fireEvent.click(removeButton);
  
      const listItem = screen.queryByText(/bananas/i);
      expect(listItem).not.toBeInTheDocument();
    });
  });